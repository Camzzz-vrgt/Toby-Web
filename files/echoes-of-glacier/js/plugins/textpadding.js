Window_Message.prototype.newLineX = function (textState) {
    const faceExists = $gameMessage.faceName() !== "";
    const faceWidth = ImageManager.faceWidth;
    const spacing = 20;
    const margin = faceExists ? faceWidth + spacing : 30;
    return textState.rtl ? this.innerWidth - margin : margin;
}