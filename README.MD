# Mama Lang 🚀

[Mama Lang Playground](https://ahnafyy.github.io/mama-lang/)
[Mama Npm Package](https://www.npmjs.com/package/mama-lang)

I grew up in Dhaka, Bangladesh 🇧🇩, where "Mama" 🗣️, which literally translates to your mom's brother, is often used by friends as a form of endearment. The closest comparison I can find is how some people would use the word "homie" 🤝 in the US. I spent countless days and nights ☕🌙, sipping tea in the stands of Abahani Field in Dhanmondi 4 or at Paribagh with friends when I was in high school 🏫👥. During these gatherings, if we had kept a tally, I believe collectively we must have uttered the word `mama` well over a hundred times.

So when I saw this: bhai-lang https://github.com/DulLabs/bhai-lang 💡, I was inspired to write my own implementation! 
To start with right now we just convert `.mama` files to `.js` and then run them with `node` and so anything that you could do in javascript land you can do it in mama lang.

I am however playing around with the idea of making its own lexer, interpreter and parser so it can just be its own thing! 

Feel free to open up PR(s) and contribute! 😄

## Playground 🚀🎮

Check out the [Mama Lang Playground](https://ahnafyy.github.io/mama-lang/) to write and run your `.mama` code in a fun and interactive environment! Whether you're taking your first steps into programming or just want to have a laugh with friends, the playground makes it easy to experiment with Mama Lang right in your browser. No installation required, just code and go! 😄👨‍💻

## Installation 💻

```
npm install -g mama-lang
```

## Usage 📝
Create a new file (boltesi.mama)

```
  shun mama "kire mamma!";
```

## Run 🚀

```
mama boltesi.mama
```

## Output 🖨️

```
kire mama!
```

## Documentation 📚

### Variables 📊
Variables can be declared using `mama aida hoilo`;

```
mama aida hoilo day = "Sunday";
mama aida hoilo temperature = 25;
mama aida hoilo isSunny = haw mama;
mama aida hoilo counter = 0;
```

### Types 🔠
Numbers and strings are like other languages. Null values can be denoted using `kisuina mama`. `haw mama` and `nah mama` are the boolean values.

```
 mama aida hoilo a = 10;
 mama aida hoilo b = 10 + (15*20);
 mama aida hoilo c = "duita";
 mama aida hoilo d = 'acha thikasey';
 mama aida hoilo e = kisuina mama;
 mama aida hoilo f = haw mama;
 mama aida hoilo g = nah mama;
```

### Built-ins 🛠️

Use `bol toh mama` to print anything to the console.

```
bol toh mama ("Hello World");
```

```
mama aida hoilo manushJon = 5;
mama aida hoilo koiGhontaKoraLagbe = 8;
mama aida hoilo shobMilayaKotoKhonLagbe = manushJon * koiGhontaKoraLagbe;
bol toh mama("Shob miliya koto ghonta kamla khatesi amra hoilo = " + shobMilayaKotoKhonLagbe);
```

## Conditionals 🔄

mama-lang supports the if-else-if ladder construct, `jodi mama` block will execute if the condition is `haw mama`, otherwise one of the subsequently added `nah hoile mama` blocks will execute if their respective condition is `haw mama`, and the `akdom e nah hoile` block will eventually execute if all of the above conditions are `nah mama`.

```
jodi mama (temperature > 30) {
  bol toh mama ("Gorom lagtese mama, AC chalao mama!");
} nah hoile mama (temperature < 20) {
  bol toh mama ("Thanda lagtese mama, sweater porum mama!");
} akdom e nah hoile {
  bol toh mama ("Aajke weather besh comfortable, mama!");
}
```

## Loops 🔁

Statements inside `jotokhon porjonto mama` blocks are executed as long as a specified condition evaluates to `haw mama`. If the condition becomes `nah mama`, the statement within the loop stops executing and control passes to the statement following the loop. Use `thamis mama` to break the loop and `tarpor er tah dekh` mama to continue within the loop.


```
  mama aida hoilo a = 0;
  jotokhon porjonto mama (a < 10) {
   a += 1;
   jodi mama (a == 5) {
    bol toh mama("loop er bhitor theke boltesi mama ", a);
    tarpor er tah dekh mama;
   }
   jodi mama (a == 6) {
    thamis mama;
   }
   bol toh mama(a);
  }
  bol toh mama("done");
```
