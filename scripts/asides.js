

let asideDefaults = {
    br:{
        tag:'br'
    },
    button:{
        tag:'a',
        class:'btn btn-outline-primary btn-sm'

    },
    horizontalLine:{
        tag:'hr',
        class:'col-12'

    },
    listItem:{
        tag:'li',
        attributes:{
            class:"list-group-item"
        },
      link:{
          tag:'a',
          attributes:{
              href:'monatsliste.html'
          }
      }
    }
}

let aside = {
    tag:'aside',
    attributes:{
        class:"col-12 col-md-3 mt-5"
    },
    content:{
        tag:'div',
        attributes:{
            class:"row"
        },
        
        loginLabel:{
            tag:'label',
            attributes:{
                for:'login',
                class:'col-5 mt-2',
            },
            text:'Login'
        },
        loginInput:{
            tag:'input',
            attributes:{
                class:"col-6 mt-2",
                id:"login",
                name:"login",
                type:"text",
                size:"12"
            },
            br:asideDefaults.br
            
        },
        passwordLabel:{
            tag:'label',
            attributes:{
                for:'password',
                class:'col-5 mt-2',
            },
            text:'Password'
        },
        passwordInput:{
            tag:'input',
            attributes:{
                class:"col-6 mt-2",
                id:"password",
                name:"login",
                type:"password",
                size:"12"
            },
            br:asideDefaults.br   
        },
        innerDiv:{
            tag:'div',
            attributes:{
                class:"col-12"
            },
            button: {
                tag:asideDefaults.button.tag,
                attributes:{
                    class:asideDefaults.button.class,
                    href:'https://google.com'
                },
                text:'Login'
            }

        },
        horizontalLine:asideDefaults.horizontalLine,
        innerDiv1:{
            tag:'div',
            attributes:{
                class:'col-12 input-group'
            },
            sucheInput:{
                tag:'input',
                attributes:{
                    type:"text", class:"form-control",
                    
                }
                
            }
            
        },

        geschachtelteDiv:{
            tag:'div',
            attributes:{
                class:"col-12 input-group input-group-sm pr-0"
            },
            button:{
                tag:asideDefaults.button.tag,
                attributes:{
                    class:'btn btn-outline-primary mt-1',
                    href:"suchergebnis.html",
                },
                text:'Search'
            }

        },
        unorderedList:{
            tag:'ul',
            attributes:{
                class:'list-group list-group-flush'
            },
            listItem1:{
                tag:asideDefaults.listItem.tag,
                attributes:asideDefaults.listItem.attributes,
                link:{
                    tag:asideDefaults.listItem.link.tag,
                    attributes:asideDefaults.listItem.link.attributes,
                    text:"November 2017 (3)"
                    
                }
                
            },
            listItem2:{
                tag:asideDefaults.listItem.tag,
                attributes:asideDefaults.listItem.attributes,
                link:{
                    tag:asideDefaults.listItem.link.tag,
                    attributes:asideDefaults.listItem.link.attributes,
                    text:"Another Link"
                    
                }
                
            },
            listItem3:{
                tag:asideDefaults.listItem.tag,
                attributes:asideDefaults.listItem.attributes,
                
                link:{
                    tag:asideDefaults.listItem.link.tag,
                    attributes:asideDefaults.listItem.link.attributes,
                    text:"März 2020 (4)"
                    
                }
                
            },
            listItem4:{
                tag:asideDefaults.listItem.tag,
                attributes:asideDefaults.listItem.attributes,
                link:{
                    tag:asideDefaults.listItem.link.tag,
                    attributes:asideDefaults.listItem.link.attributes,
                    text:"Juni another 2017 (5)"  
                }
                
            },
            listItem5:{
                tag:'li',
                attributes:asideDefaults.listItem.attributes,
                link:{
                    tag:'a',
                    attributes:{
                        class:'list-group-item'
                    },
                    text:'Juni another 2017 (5)'  
                }
                
            }
        }
       
}
}

let p = {
    tag:'p',
    text:'Hier kommt mein text...'
}











// <!-- Breite 1/4 (3/12) -->
// 			<!-- <aside class="col-12 col-md-3 mt-5">
// 				<div class="row">
// 					<label for="login" class="col-5 mt-2">Login</label>
// 					<input class="col-6 mt-2" id="login" name="login" type="text" size="12" /><br>
// 					<label for="password" class="col-5 mt-2">Passwort</label> 
// 					<input class="col-6 mt-2" id="password" name="password" type="password" size="12" /><br>
// 					<div class="col-12"><a class="btn btn-outline-primary btn-sm" href="#">Login</a></div>

// 					<hr class="col-12">
					
// 					<div class="col-12 input-group input-group-sm pr-0">
// 						<input type="text" class="form-control" aria-label="Suchen">
// 						<div class="input-group-append">
// 							<a class="btn btn-outline-primary" href="suchergebnis.html">Suchen</a>
// 						</div>
// 					</div>					
			
// 					<hr class="col-12">

// 					<ul class="list-group list-group-flush">
// 						<li class="list-group-item"><a href="monatsliste.html">November 2017 (3)</a></li>
// 						<li class="list-group-item"><a href="monatsliste.html">Dezember 2017 (1)</a></li>
// 						<li class="list-group-item"><a href="monatsliste.html">März 2018 (2)</a></li>
// 						<li class="list-group-item"><a href="monatsliste.html">April 2018 (1)</a></li>
// 					</ul>
					
// 					<hr class="col-12">
// 					<div class="col-12">
// 						<span class="tag-1">Semantik</span>
// 						<a class="tag-5" href="tagliste.html">HTML5</a>
// 						<span class="tag-1">Element</span>
// 						<span class="tag-3">Dokument</span>
// 						<span class="tag-2">HTTP</span>
// 					</div>
// 				</div>
// 			</aside> --></div>