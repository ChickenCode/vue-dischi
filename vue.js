new Vue ({
    el: "#root",

    data: {
        albumList: null,
        type: "Default"
    },

    methods: {

    },

    mounted() {
        axios.get("https://flynn.boolean.careers/exercises/api/array/music")
        .then(resp => this.albumList = resp.data.response);

        setInterval(() => {
            this.albumList.sort((a, b) =>  a.year - b.year)
        }, 50);
        /*
            "poster": "https://www.onstageweb.com/wp-content/uploads/2018/09/bon-jovi-new-jersey.jpg",
            "title": "New Jersey",
            "author": "Bon Jovi",
            "genre": "Rock",
            "year": "1988"
        */
    }
})