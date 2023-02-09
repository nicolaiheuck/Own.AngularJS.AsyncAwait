(function() {
    app.controller("test.indexController", indexController)
    
    function indexController() {
        this.buttonText = "Click me!";

        this.counter = 0;

        this.onClick = () => {
            this.counter++;
            this.buttonText = `Clicked ${this.counter}`;
        }
    }
})();