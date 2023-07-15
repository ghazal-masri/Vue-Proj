const app = Vue.createApp(
  //U CAN ADD SOME DATA,FUNC HERE....
  {
    //template:'<h1> hi !</h1>'
    //function :
    data() {
      return {
        url: "https://www.youtube.com/watch?v=CYPZBK8zUik&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&index=3",
        showBooks: true,
        book: [
          {
            title: "thats me..",
            author: "morkin",
            age: "22",
            img: "collec/book1.jpg",
            isFav: true,
          },
          {
            title: "wonder!",
            author: "brian",
            age: "25",
            img: "collec/book2.avif",
            isFav: true,
          },
          {
            title: "why its true?",
            author: "josh",
            age: "33",
            img: "collec/book3.avif",
            isFav: false,
          },
        ],
        x: 0,
        y: 0,
      };
    },
    methods: {
      changeTitle() {
        this.book[0].title = "why me?";
      },
      changeName(author) {
        this.book[0].author = author;
      },
      toggleBooks() {
        this.showBooks = !this.showBooks;
      },
      handleEvent(ev, data) {
        console.log(ev);
        if (data) console.log(data);
      },
      handlemousemove(e) {
        this.x = e.offsetX;
        this.y = e.offsetY;
      },
      handlfav(books) {
        books.isFav = !books.isFav;
      },
    },
    computed: {
      filterfav() {
        return this.book.filter((books) => books.isFav);
      },
    },
  }
);
app.mount("#app");
