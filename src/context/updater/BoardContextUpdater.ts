class BoardContextUpdater {
  
  protected callback?: () => void

  setCallback = (callback: () => void) => {
    this.callback = callback
  }

  update = () => {
    if (this.callback) {
      this.callback()
    }
  }
}

export default new BoardContextUpdater()