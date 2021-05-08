# caesar-cipher-cli

**Implemented CLI tool that encode and decode a text by [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)**.

Before using install dependencies:
```bush
$ npm install
```

**Usage example:**  
1. _-a (--action)_ is **encode**

```bash
$ node caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
```
> input.txt
> `This is secret. Message about "_" symbol!`
> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`
```bash
$ node caesar_cli --action encode --shift 7 --input plain.txt --output encoded.txt
```
> plain.txt
> `This is secret. Message about "_" symbol!`
> encoded.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`
2. _-a (--action)_ is **decode**  
_Decoding encoded initial string with the same -s(--shift) number produces the initial string._

```bash
$ node caesar_cli --action decode --shift 7 --input encoded.txt --output plain.txt
```

> encoded.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`
> plain.txt
> `This is secret. Message about "_" symbol!`
3. _(Optional) Negative shift handling_

```bash
$ node caesar_cli --action encode --shift -1 --input plain.txt --output encoded.txt
```

> plain.txt
> `This is secret. Message about "_" symbol!`
> encoded.txt
> `Sghr hr rdbqds. Ldrrzfd zants "_" rxlank!`