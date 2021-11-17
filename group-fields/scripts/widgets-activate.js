if (window.WIDGETs_LIST) {

    window.WIDGETs_LIST.forEach((widgetFunc) => {

        const widget = new widgetFunc()

        widget.callbacks.render()

    })

}