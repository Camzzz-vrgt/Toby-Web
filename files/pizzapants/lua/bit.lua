--[[
Pure Lua 5.1 implementation of the LuaJIT `bit` library.

love.js does not ship LuaJIT's bit operations, but Kristal (and some mods)
call the global `bit` table, e.g. `bit.band` inside Utils.parseTileGid.
This module returns the same API surface and follows LuaJIT semantics:
operations treat inputs as unsigned 32-bit integers and return signed
32-bit results.
]]

local floor = math.floor
local MOD = 4294967296 -- 2^32

local function norm(n)
  n = floor(n) % MOD
  if n < 0 then
    n = n + MOD
  end
  return n
end

local function signed(n)
  if n >= 2147483648 then -- 2^31
    return n - MOD
  end
  return n
end

local function bop(a, b, f)
  a, b = norm(a), norm(b)
  local res, place = 0, 1
  for _ = 1, 32 do
    local abit, bbit = a % 2, b % 2
    if f(abit, bbit) then
      res = res + place
    end
    a = (a - abit) / 2
    b = (b - bbit) / 2
    place = place * 2
  end
  return res
end

local bit = {}

local function fold(f, a, b, ...)
  local r = bop(a, b, f)
  if select("#", ...) > 0 then
    return fold(f, r, ...)
  end
  return signed(r)
end

function bit.band(a, b, ...)
  return fold(function(x, y) return x == 1 and y == 1 end, a, b, ...)
end

function bit.bor(a, b, ...)
  return fold(function(x, y) return x == 1 or y == 1 end, a, b, ...)
end

function bit.bxor(a, b, ...)
  return fold(function(x, y) return x ~= y end, a, b, ...)
end

function bit.bnot(n)
  return signed(MOD - 1 - norm(n))
end

function bit.lshift(n, k)
  k = k % 32
  return signed(norm(norm(n) * 2 ^ k))
end

function bit.rshift(n, k)
  k = k % 32
  return signed(floor(norm(n) / 2 ^ k))
end

function bit.arshift(n, k)
  k = k % 32
  local s = signed(norm(n))
  return signed(floor(s / 2 ^ k))
end

local function rot(n, k)
  k = k % 32
  n = norm(n)
  return signed(norm(n * 2 ^ k + floor(n / 2 ^ (32 - k))))
end

function bit.rol(n, k)
  return rot(n, k)
end

function bit.ror(n, k)
  return rot(n, -k)
end

function bit.lrotate(n, k)
  return rot(n, k)
end

function bit.rrotate(n, k)
  return rot(n, -k)
end

function bit.bswap(n)
  n = norm(n)
  local r = 0
  for _ = 1, 4 do
    r = r * 256 + n % 256
    n = floor(n / 256)
  end
  return signed(r)
end

function bit.tobit(n)
  return signed(norm(n))
end

function bit.tohex(n, digits)
  digits = digits or 8
  local upper = digits < 0
  local d = math.min(math.abs(digits), 16)
  local s = string.format("%x", norm(n) % (16 ^ d))
  s = string.rep("0", d - #s) .. s
  return upper and s:upper() or s
end

return bit
