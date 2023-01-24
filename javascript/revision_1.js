const chapter = "Chapter 2",
      title   = "JavaScript for React";

const release_date = "1995"
const note1 = `JavaScript was released in ${release_date} and has gone through
    many changes since then. DHTML and AJAX where one of the first features that
    were implemented during it evolution to the present JavaScript which has become
    a real software language that is used to build full-stack applications since the 
    development of Node.js`;

const note2 =  `The communittee in charge of shepherding the changes to JavaScript over
    the years is the European Computer Manufacturers Association (ECMA).
    
    The first relasease of ECMAScript was in 1997 called ECMAScript1 which was followed 
    by ECMAScript2 and ECMAScript3 in 1998 and 1999 respectively ECMAScript4 was not released
    due to the controversy that erupted causing a polictal mess that proved to be impossible.
    ECMAScript5 was then released in 2009 bringing features like new arrary methods, object properties,
    and library support for JSON. Since the release of ES5 there has been a lot mor momentum in the space.
    After that ECMAScript6 or ES2015 was released in 2015, currently ECMAScript has gotten to the 8th release 
    version`;

const sub_title = "Declaring Variables";
const keywords = {
    "const": `a const is a variable that cannot be overwritten. Once declared, the value cannot be changed`,
    "let": `When declared within a block {} it does not interfere with variables with similar name outside the block`,
    "let_example": function () {
        var topic = "JavaScript";
        if (topic){ 
            let topic = "React";
            console.log("block", topic);
        }

        console.log("global", topic);
    },

    "let_example2": function(){
        const container = document.querySelector("#container");

        let div;

        for (let i = 0; i < 5; i++) {

            div = document.createElement("div");

            div.onclick = function() {
                alert("This is box #: " + i);
            };
            container.appendChild(div);
        }
    },

    "navbar": function(){
        return(
        `<nav class="navbar navbar-expand-lg bg-light nav-light">
            <div class="container-fluid d-flex align-items-center justify-content-between">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-mdb-toggle="dropdown">Link</a>
                        <ul class="dropdown-menu dropdown-menu-start">
                            <li class="dropdown-item">
                                sub-link1
                            </li>
                            <li class="dropdown-item">
                                sub-link2
                            </li>
                            <li class="dropdown-item">
                                sub-link3
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    {% if user.is_authenticated %}
                    <li class="nav-item">
                        <a class="nav-link dropdown-toggle rounded-circle" data-mdb-toggle="dropdown">
                            <img src="{% static '' %}" class="img-thumbnail"/>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-start">
                            <li class="dropdown-item">
                                sub-link1
                            </li>
                            <li class="dropdown-item">
                                sub-link2
                            </li>
                            <li class="dropdown-item">
                                <a href="{% url('account:logout') %}">
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </li>
                    {% else %}
                    <li class="nav-item" >
                        <a href="" class="nav-link">
                            Login
                        </a>
                    </li>
                    {% endif %}
                </ul>
            </div>
         </nav>`
       ); 
    },

    "fetch_personAPI": async () => {
        let res = await fetch("https://api.randomuser.me/?nat=US&results=1")
        let { results } = res.json();
        console.log(results);
    },

    "getFakePerson": async () => {
        try{
            let res = await fetch("https://api.randomuser.me/?nat=US&results=1")
            let { results } = res.json();
            console.log(results);
        }catch (error){
            console.error(error);
        }
    },

    
    ajax_api: (url, entry) => 
    new Promise((resolve, rejects, url, entry) => {
        const api = `${window.origin}/${url}`;
        const req = new XMLHttpRequest();
        const settings = {
            method: "POST",
            credentials:"include",
            body:JSON.stringify(entry),
            cache:"no-cache",
            headers: new Headers({"content-type": "application/json"})
        };

        req.open(settings.method, api);

        req.onload = () => req.status === 200
            ? resolve(JSON.parse(req.response).results)
            : rejects(Error(req.statusText));
        req.onerror = err => rejects(err);
        req.send()
    }).catch(error=>console.error(`Failed: ${error.message}`)),

}

