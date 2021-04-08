window.addEventListener("load", event => test)

// create a class : 

class Parse
{
    constructor()
    {
        this.oplg = ["&&", "||", "!"];
    
        this.deep = /(&&|\|\||\([^)]+\))/; // regular expression

        this.character = /(\([^\(\)]+)\)/; // nest
    }



    parseexpression(objects,expression)
    {   
        objects = {a: true, b: false, c: 5}
        const expr = expression.split(this.deep).map(rem => rem.trim()) // remove space and split our expression
        console.log(expr);
        
     
        while(this.character.test(expression)) // browse  in our expression
        {
            expression = expression.replace(this.character, objects.a ) // replace a by true
            expression = expression.replace(this.character, objects.b ) // replace b by false 
            // i try to replace c but after a lot of try i give up :( 
            
        }
        console.log(expression);
    }
    
}

let  test = new Parse();
test.parseexpression({a: true, b: false, c: 5},"(a || b) || (a && b) && c");







/* i unfortunately didn't succes to relize the program but i learn a lot of about security and regluar expression.

My problem : 

_ i didn't find a way to calculate the expression

_ i didn't see how to use Foreach than replace

_ i got a over "" in my expression and i don't understrand how it happens

_ and a lot of difficulties with the nest expression( i'm not confident with my "this.character").

thats all

Thank you for your attention.*/
