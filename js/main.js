$(function() {

    $("[data-collapse]").on("click", function (event) {
        event.preventDefault()

        let $this = $(this)
        let blockId = $this.data("collapse")
        
        $this.toggleClass("active")
    })

}) 