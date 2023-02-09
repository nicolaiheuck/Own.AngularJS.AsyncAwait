(function() {
    angular.module("test", ["mm.$async"])
           .controller("test.detailsController", ["$http", "$async", detailsController])
    
    function detailsController($http, $async) {
        const self = this;
        self.test = "- test";

        this.asyncApiCall = $async(function*() {
            const response = yield $http.get("https://jsonplaceholder.typicode.com/todos/1")
            const { title, completed, id } = response.data;
            self.title = title;
            self.completed = completed;
            self.id = id;
            console.log("Api called");
        })

        this.asyncApiCall()

    }
})();

//#region This works in vanilla angularJS 1.5
// async function testAsync(num1Promise, num2) {
//     return (await num1Promise) + num2;
// }

// $q.when(testAsync(Promise.resolve(2), 2)).then(a => {
//     console.log(`self.title = ${a}`);
//     self.title = "Number: " + a;
// })
//#endregion