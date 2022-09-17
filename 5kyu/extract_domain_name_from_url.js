// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"


// -------------------- My Solution -----------------------------------


function domainName(url){
    // splitting on the basis of . and then checking if the first split ends with www,
    //  if so this means that the second split is the domain link so we return it 
    if (url.split(".")[0].endsWith("www")) {
     return url.split(".")[1]
    } else {
        // if it is not ending in www this means that the domain is in the first split 
    //   where we could also have https so we first check for it too and remove it 
        if (url.split(".")[0].search("//") != -1) {
        return url.split(".")[0].split("//")[1]
      } else {
        // otherwise we return the first part of the split 
        return url.split(".")[0]
      }
    }
 }