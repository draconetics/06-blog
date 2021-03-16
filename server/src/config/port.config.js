//default development port
let PORT = 4000;

if (process.env.NODE_ENV === 'test') 
{
    PORT = 4001;
} 
if (process.env.NODE_ENV === 'production') 
{
    PORT = process.env.PORT;
}

module.exports = { PORT };