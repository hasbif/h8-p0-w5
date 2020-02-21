function changeVocals (str) {
    //code di sini
    var alp ='abcdefghijklmnopqrstuvwxyzaABCDEFGHIJKLMNOPQRSTUVWXYZA'
    var word = ''
    for (var i=0; i<str.length;i++){
        for (var j=0;j<alp.length;j++){
            if (str[i] == alp[j]){
                word += [alp[j+1]]
                break
            }
        }
    
    }
    return word
  }

  
  function reverseWord (str) {
    //code di sini
    var word = ''
    for (var i=str.length-1; i>=0; i--){
        word += str[i]
    }
    return word
  }

  function setLowerUpperCase (str) {
    //code di sini
    var word = ''
    for (var i=0; i<str.length;i++){
        if (str[i]>='a' && str[i]<='z'){
            word += str[i].toUpperCase()
        }else{word +=str[i].toLowerCase()}
    }
    return word
  }
  
  
  function removeSpaces (str) {
    //code di sini
    var word = ''
    for (var i=0; i<str.length;i++){
        if (str[i] != ' '){
            word += str[i]
        }
    }
    return word
  }

  function passwordGenerator (name) {
    //code di sini
    if (name.length<5){return 'Minimal karakter yang diinputkan adalah 5 karakter'}
    var a = changeVocals(name)
    var b = reverseWord(a)
    var c = setLowerUpperCase(b)
    var d = removeSpaces(c)
    return d
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'