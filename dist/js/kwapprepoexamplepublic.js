class kwapprepoexamplepublic extends WindowTemplate
{
    constructor()
    {
        super(); // to inherit from base class
        this.id = this.randomWindowID();

        this.container = document.createElement('div');
        this.container.classList.add("kwapprepoexamplepublic", "kw-d-flex", "kw-align-content-center", "kw-align-items-center", "kw-flex-wrap", "kw-mt-8");

        let appContent = `
        <div class="header">
            <h1>kwapprepoexamplepublic</h1>
        </div>
        `;

        this.container.innerHTML = appContent;

        // windows options, REQUIRED
        this.initOptions = {
            body: this.container, //should always be the container you created above
            inject: ['/content/css/windows/icons.css'], //String Array of js files, DB will add any additional to this
            roles: [], //String Array of Roles, OVERWRITTEN BY DB, pipe delimited "|"
            snapping: true, // makes window snap to grid positions
            draggable:false,
            shadows:true,
            resizable: true, // enables/disables dragging corners of window to resize (not grid positions)
            position: ["middle", "middle"],
            width: "100%",
            locked: true, //Have to pick a grid - snap locked to grid (does NOT stop user from dragging)
            id: this.id, //in template base class, should always be a random ID to prevent overlaps
            Icon: "pfi-app-generic",
            IconColor: '#000',
            IconBkgColor: 'rgba(255, 255, 255, 0.85)',
            title: "kwapprepoexamplepublic",
            minimize:true,
            maximize:true,
            ClassFile: "/content/js/windows/kwapprepoexamplepublic.js",
            ClassName: "kwapprepoexamplepublic",
        };
    }

    // THIS METHOD REQUIRED TO MAKE YOUR APP FUNCTION
    async initialize()
    {
        
    }
}

//add to windows scope - REQUIRED
GlobalWindowManager.AppsManager.addClass({ "kwapprepoexamplepublic": kwapprepoexamplepublic });