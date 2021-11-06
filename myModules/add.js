export function add(a, b){
    const sum = a + b;

    document.open();
    document.writeln("<h2>Your sum is: </h2>");
    document.writeln(sum);

}