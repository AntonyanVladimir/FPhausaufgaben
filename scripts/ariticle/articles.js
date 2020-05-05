let defaults = {
    tag: 'article',
    attributes: {
        class: 'article-element'
    },
    header: {
        tag: 'h4',
        attributes: {
            class: 'header'
        }
    },
    content: {
        tag: 'div',
        attributes: {
            class: 'content'
        },
        image: {
            tag: 'img',
            attributes: {
                class: 'main-image'
            }
        },
        info:{
            tag:'p',
            text: new Date("2015-03-25").toISOString().split('T')[0]
        },
        description: {
            tag: 'p',
            
            attributes: {
                class: 'description'
            }, 

        },
        divSocial:{
            tag:'div',
            linkFb:{
                tag:'a',
                attributes:{
                    title:'Facebook',
                    href:'https://facebook.de',
                    target:'_blank'
                },
                text:'Teilen auf Facebook | '
            },
            linkTwitter:{
                tag:'a',
                attributes:{
                    title:'Twitter',
                    href:'https://twitter.com',
                    target:'_blank'
                },
                text:'Twittern | '
            },
            linkEmail:{
                tag:'a',
                attributes:{
                   
                    href:'https://gmail.com',
                    target:'_blank'
                },
                text:'Teilen via E-mail '
            }
        }
    }
};

let articles = [
    {
        tag: defaults.tag,
        attributes: {
            class:  defaults.attributes.class
        },
        header: {
            text: 'Wenn es um die schwarzen Hunden geht... :D',
            tag: defaults.header.tag,
            attributes: {
                id: 'myId1',
                class: `${defaults.header.attributes.class} primary-header`
            }
        },
        content: {
            tag: defaults.content.tag,
            attributes: {
                class:  defaults.content.attributes.class
            },
            image: {
                tag: defaults.content.image.tag,
                attributes: {
                    src: 'https://cdn.pixabay.com/photo/2015/11/17/13/13/bulldog-1047518_960_720.jpg',
                    class: defaults.content.image.attributes.class,
                    title: 'some image title 1',
                    alt: 'some image alt 1',
                    heigth:"250px",
                    width:"300px"
                }
            },
            info:defaults.content.info,
            description: {
                tag: defaults.content.description.tag,
                attributes: {
                    class: defaults.content.description.attributes.class
                },
                
                text: 'Der Haushund ist ein Haustier und wird als Heim- und Nutztier gehalten. Seine wilde Stammform ist der Wolf, dem er als Unterart zugeordnet wird. Wann die Domestizierung stattfand, ist umstritten; wissenschaftliche Schätzungen variieren zwischen 15.000 und 100.000 Jahren'
            
            },
            divSocial:defaults.content.divSocial
            
        }
    },

    {
        tag: defaults.tag,
        attributes: {
            class:  defaults.attributes.class
        },
        header: {
            text: 'Etwas über den Wecker.',
            tag: defaults.header.tag,
            attributes: {
                id: 'myId2',
                class: `${defaults.header.attributes.class} primary-header`
            }
        },
        content: {
            tag: defaults.content.tag,
            attributes: {
                class:  defaults.content.attributes.class
            },
            image: {
                tag: defaults.content.image.tag,
                attributes: {
                    src: 'https://cdn.pixabay.com/photo/2020/04/23/22/11/clock-5084284_1280.jpg',
                    class: defaults.content.image.attributes.class,
                    title: 'some image title 1',
                    alt: 'some image alt 1',
                    heigth:"250px",
                    width:"300px"
                }
            },
            info:defaults.content.info,
            description: {
                tag: defaults.content.description.tag,
                attributes: {
                    class: defaults.content.description.attributes.class
                },
               
                text: 'Ein Wecker ist eine Uhr, die zu einer zuvor einzustellenden Uhrzeit aus dem Schlaf wecken oder an einen bestimmten Termin erinnern soll. Dies geschieht meist durch ein akustisches Signal..'
            },
            divSocial:defaults.content.divSocial
        }
    },

    {
        tag: defaults.tag,
        attributes: {
            class:  defaults.attributes.class
        },
        header: {
            text: 'Hier geht es um die Kinder.',
            tag: defaults.header.tag,
            attributes: {
                id: 'myId2',
                class: `${defaults.header.attributes.class} primary-header`
            }
        },
        content: {
            tag: defaults.content.tag,
            attributes: {
                class:  defaults.content.attributes.class
            },
            image: {
                tag: defaults.content.image.tag,
                attributes: {
                    src: 'https://cdn.pixabay.com/photo/2020/04/25/15/44/different-nationalities-5091373_1280.jpg',
                    class: defaults.content.image.attributes.class,
                    title: 'some image title 1',
                    alt: 'kinder alt1',
                    heigth:"250px",
                    width:"350px"
                }
            },
            info:defaults.content.info,
            description: {
                tag: defaults.content.description.tag,
                attributes: {
                    class: defaults.content.description.attributes.class
                },
                
                text: 'Zu viel Süßes ist ungesund und schlecht für die Zähne. Ganz verbieten sollten Eltern ihren Kindern das Naschen jedoch nicht. Denn Kinder müssen den Umgang mit Zucker bzw. Süßigkeiten erlernen.'
            },
            divSocial:defaults.content.divSocial
        }
    },

    
];
