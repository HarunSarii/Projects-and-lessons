const thy = {
  airline: "Turkish Airlines",
  iataCode: "TK",
  bookings: [],

  book(flightNum, name) {
    console.log(this);
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

thy.book(239, "Barry Mitchell");

const anadolu = {
  airline: "Anadolu Jet",
  iataCode: "TK",
  bookings: [],
};

const book = thy.book;

// book(11, "Matthew");

book.call(anadolu, 11, "Matthew");
book.call(thy, 22, "Mark");

const pegasus = {
  airline: "Pegasus Airlines",
  iataCode: "PC",
  bookings: [],
};

book.call(pegasus, 55, "Felix");

// Apply method

book.apply(pegasus, [66, "Eser"]);

// bind

const bookTHY = book.bind(thy);

bookTHY(77, "Betul");

thy.planes = 300;
thy.addPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .getElementById("plane")
  .addEventListener("click", thy.addPlane.bind(thy));

thy.addPlane();
