var quotes = [
  "I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. - Maya Angelou",
  "If you don\'t like something, change it. If you can\'t change it, change your attitude. - Maya Angelou",
  "We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty. - Maya Angelou",
  "Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it. - Rumi",
  "Let yourself be silently drawn by the stronger pull of what you really love. - Rumi",
  "If you are irritated by every rub, how will your mirror be polished? - Rumi",
  "The meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed. - C.G. Jung",
  "Every form of addiction is bad, no matter whether the narcotic be alcohol or morphine or idealism. - C.G. Jung",
  "Everything that irritates us about others can lead us to an understanding of ourselves. - C.G. Jung",
  "As far as we can discern, the sole purpose of human existence is to kindle a light of meaning in the darkness of mere being. - C.G. Jung",
  "In all chaos there is a cosmos, in all disorder a secret order. - C.G. Jung",
  "Even after all this time the Sun never says to the Earth, \'You owe me.\' Look what happens with a love like that, it lights the whole sky. - Hafiz",
  "I wish I could show you when you are lonely or in darkness the astonishing light of your own being. - Hafiz",
  "Ever since happiness heard your name, it has been running through the streets trying to find you. - Hafiz",
  "Fear is the cheapest room in the house. I would like to see you living in better conditions. - Hafiz",
  "Don\'t think, feel....it is like a finger pointing a way to the moon. Don\'t concentrate on the finger or you will miss all that heavenly glory! - Bruce Lee",
  "Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it. - Bruce Lee",
  "If you love life, don\'t waste time, for time is what life is made up of. - Bruce Lee",
  "Be thankful for what you have; you\'ll end up having more. If you concentrate on what you don\'t have, you will never, ever have enough. - Oprah",
  "Lots of people want to ride with you in the limo, but what you want is someone who will take the bus with you when the limo breaks down. - Oprah",
  "Breathe. Let go. And remind yourself that this very moment is the only one you know you have for sure. - Oprah"
]



function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));

  // document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
