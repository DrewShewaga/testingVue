(() =>{
    // set up vue instance
    const vm = new Vue({
        el : "#app",

        data : {
            message : "Welcome to your first Vue app!",

            targetURL : "http://google.ca",

            vuemessage : "Yay! You can haz view",

            deliciousFruit : [
                { name: "apple", flavour: "tasty" },
                { name: "orange", flavour: "orange" },
                { name: "mango", flavour: "sweet" }
            ],

            anchorOff : true,

            hazVue : true
        },

        methods : {
            logFruit(e) {
                console.log(e.currentTarget);
            }
        }
    });

    const vm2 = new Vue({
        el : "#footer",

        data : {
            footermessage : "This is in the footer"
        }
    })
})();