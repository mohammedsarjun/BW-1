class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let hashingKey = 0;

    for (let i = 0; i < key.length; i++) {
      hashingKey += key.charCodeAt(i);
    }

    return hashingKey % this.size;
  }

  //Seperate Chaining
  // set(key, value) {
  //   const hashedKey = this.hash(key);

  //   if (!this.table[hashedKey]) {
  //     this.table[hashedKey] = [];
  //   }

  //   this.table[hashedKey].push([key, value]);
  // }


  // Lenear Probing
  
  // set(key,value){
  //   let index=this.hash(key)

  //  while(this.table[index]!==undefined){

  //   if(this.table[index][0]==key){
  //     this.table[index][1]=value
  //     return
  //   }
  //   index=(index+1)%this.size
  //  }

  //  this.table[index]=[key,value]
  // }


  //Quadric Probing (Reason for usng quadric probing is because in lenear probing every element will close to each other will cause clustering to prevent this we use quadric probing which will spread the element accross the table)

  set(key,value){
    let index=this.hash(key)
    let i=1

    while(this.table[index]!==undefined){
      index=(this.hash(key)+(i*i))%this.size
      i++
    }

    this.table[index]=[key,value]
  }

  //

  //
  get(key) {
    const hashedKey = this.hash(key);

    if (!this.table[hashedKey]) return undefined;

    const pair = this.table[hashedKey].find((item) => item[0] === key);

    return pair ? pair[1] : undefined;
  }

  removeDuplicate(str) {
    let answer = "";

    for (let i = 0; i < str.length; i++) {
      if (!this.get(str[i])) {
        this.set(str[i], true);
        answer += str[i];
      }
    }

    return answer;
  }
}

const table = new HashTable(50);

table.set("cat", "meow");
table.set("tac", "mow");

console.log(table.get("tac")); 

// testing remove duplicate
console.log(table.removeDuplicate("programming"));