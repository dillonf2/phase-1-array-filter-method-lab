const { objectContaining } = require("expect")

function findMatching(array, string){
      return((array.filter(function(element){
      return (string.toLowerCase()==element.toLowerCase())
     })))
     
    }

function fuzzyMatch(array,string){
    return(array.filter(function(element){
        return(string.substring(0,2)==element.substring(0,2))
        })
    )
    }

    function matchName (array,string){
        return(array.filter(function(key){
            return (string===key.name)
        }))
    }