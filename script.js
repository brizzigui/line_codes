function create_container(parent)
{
    let container = document.createElement("div");
    container.className = "container";
    container.id = parent;
    document.getElementById("viewer_container").appendChild(container);
}

function create_new_table(id, parent)
{
    let table = document.createElement("table");
    table.id = id;
    document.getElementById(parent).appendChild(table);
}

function create_label(parent, label)
{
    let type = document.createElement("p");
    type.innerHTML = label;
    type.className = "label";
    document.getElementById(parent).appendChild(type);
}

// nrzl means non return to zero level
// that is, the level represents the bit
// - is 0 and + is 1
function nrzl(sequence)
{
    const parent = "nrzl_container"
    const id = "nrzl_table";
    create_container(parent);
    create_label(parent, "NRZ-L");
    create_new_table(id, parent);

    let table = document.getElementById(id);
    let row_top = document.createElement("tr");
    let row_mid = document.createElement("tr");
    let row_bottom = document.createElement("tr");

    let last = 0;

    for (let i = 0; i < sequence.length; i++) 
    {
        let ctop = document.createElement("td")
        let cmid = document.createElement("td")
        let cbottom = document.createElement("td")

        ctop.classList.add("indicator");
        ctop.classList.add("zero");
        cmid.classList.add("indicator");

        ctop.classList.add("signal");
        cmid.classList.add("signal");

        if (i == 0) 
        {
            if (sequence[i] == 0)
            {
                cmid.classList.add("on_bottom");
            }

            else
            {
                ctop.classList.add("on_top");
            }
        }

        else
        {
            if (last != sequence[i])
            {
                cmid.classList.add("on_left");
                ctop.classList.add("on_left");
            }

            if (sequence[i] == 0)
            {
                cmid.classList.add("on_bottom");
            }

            else
            {
                ctop.classList.add("on_top");
            }
        }

        cbottom.innerHTML = sequence[i];
        cbottom.classList.add("binary_label");

        row_top.appendChild(ctop);
        row_mid.appendChild(cmid);
        row_bottom.appendChild(cbottom);

        last = sequence[i];
    }

    table.appendChild(row_top);
    table.appendChild(row_mid);
    table.appendChild(row_bottom);
}

// nrzi means non return to zero invert
// inverted = 1; same = 0;
function nrzi(sequence)
{
    const parent = "nrzi_container"
    const id = "nrzi_table";
    create_container(parent);
    create_label(parent, "NRZ-I");
    create_new_table(id, parent);

    let table = document.getElementById(id);
    let row_top = document.createElement("tr");
    let row_mid = document.createElement("tr");
    let row_bottom = document.createElement("tr");

    let up = true;

    for (let i = 0; i < sequence.length; i++) 
    {
        let ctop = document.createElement("td")
        let cmid = document.createElement("td")
        let cbottom = document.createElement("td")

        ctop.classList.add("indicator");
        ctop.classList.add("zero");
        cmid.classList.add("indicator");

        ctop.classList.add("signal");
        cmid.classList.add("signal");

        if (sequence[i] == 1 && i !=0)
        {
            cmid.classList.add("on_left");
            ctop.classList.add("on_left");
            up = !up;
        }

        if (up) 
        {
            ctop.classList.add("on_top");
        }

        else
        {
            cmid.classList.add("on_bottom");
        }

        cbottom.innerHTML = sequence[i];
        cbottom.classList.add("binary_label");

        row_top.appendChild(ctop);
        row_mid.appendChild(cmid);
        row_bottom.appendChild(cbottom);
    }

    table.appendChild(row_top);
    table.appendChild(row_mid);
    table.appendChild(row_bottom);
}


// ami means alternate mark inversion
// 0 is always 0
// 1 alternates between - and +
function ami(sequence)
{
    const parent = "ami_container"
    const id = "ami_table";
    create_container(parent);
    create_label(parent, "AMI");
    create_new_table(id, parent);

    let table = document.getElementById(id);
    let row_top = document.createElement("tr");
    let row_mid = document.createElement("tr");
    let row_bottom = document.createElement("tr");

    let last = 0;
    let up = false;

    for (let i = 0; i < sequence.length; i++) 
    {
        let ctop = document.createElement("td")
        let cmid = document.createElement("td")
        let cbottom = document.createElement("td")

        ctop.classList.add("indicator");
        ctop.classList.add("zero");
        cmid.classList.add("indicator");

        ctop.classList.add("signal");
        cmid.classList.add("signal");

        if (sequence[i] == 0) 
        {
            ctop.classList.add("on_bottom");
            if (last == 1 && i != 0)
            {
                if (up) 
                    ctop.classList.add("on_left");   
                else
                    cmid.classList.add("on_left");   
            }
        }

        else
        {
            up = !up;

            if (up) 
            {
                if(last == 1 && i != 0)
                {
                    cmid.classList.add("on_left");    
                }

                if(i != 0)
                    ctop.classList.add("on_left");    
                ctop.classList.add("on_top");    
            }

            else
            {
                if(last == 1 && i != 0)
                {
                    ctop.classList.add("on_left");    
                }

                if(i != 0)
                    cmid.classList.add("on_left");    
                cmid.classList.add("on_bottom");  
            }
        }

        cbottom.innerHTML = sequence[i];
        cbottom.classList.add("binary_label");

        row_top.appendChild(ctop);
        row_mid.appendChild(cmid);
        row_bottom.appendChild(cbottom);

        last = sequence[i];
    }

    table.appendChild(row_top);
    table.appendChild(row_mid);
    table.appendChild(row_bottom);
}

// pseudoternary is similar to ami
// 1 is always 0
// 0 alternates between - and +
function pseudoternary(sequence)
{
    const parent = "pseudoternary_container"
    const id = "pseudoternary_table";
    create_container(parent);
    create_label(parent, "Pseudoternário");
    create_new_table(id, parent);

    let table = document.getElementById(id);
    let row_top = document.createElement("tr");
    let row_mid = document.createElement("tr");
    let row_bottom = document.createElement("tr");

    let last = 1;
    let up = false;

    for (let i = 0; i < sequence.length; i++) 
    {
        let ctop = document.createElement("td")
        let cmid = document.createElement("td")
        let cbottom = document.createElement("td")

        ctop.classList.add("indicator");
        ctop.classList.add("zero");
        cmid.classList.add("indicator");

        ctop.classList.add("signal");
        cmid.classList.add("signal");

        if (sequence[i] == 1) 
        {
            ctop.classList.add("on_bottom");
            if (last == 0 && i != 0)
            {
                if (up) 
                    ctop.classList.add("on_left");   
                else
                    cmid.classList.add("on_left");   
            }
        }

        else
        {
            up = !up;

            if (up) 
            {
                if(last == 0)
                {
                    cmid.classList.add("on_left");    
                }

                if(i != 0)
                    ctop.classList.add("on_left");    
                ctop.classList.add("on_top");    
            }

            else
            {
                if(last == 0)
                {
                    ctop.classList.add("on_left");    
                }

                if(i != 0)
                    cmid.classList.add("on_left");    
                cmid.classList.add("on_bottom");  
            }
        }

        cbottom.innerHTML = sequence[i];
        cbottom.classList.add("binary_label");

        row_top.appendChild(ctop);
        row_mid.appendChild(cmid);
        row_bottom.appendChild(cbottom);

        last = sequence[i];
    }

    table.appendChild(row_top);
    table.appendChild(row_mid);
    table.appendChild(row_bottom);
}

function manchester(sequence)
{
    const parent = "manchester_container"
    const id = "manchester_table";
    create_container(parent);
    create_label(parent, "Manchester");
    create_new_table(id, parent);

    let table = document.getElementById(id);
    let row_top = document.createElement("tr");
    let row_mid = document.createElement("tr");
    let row_bottom = document.createElement("tr");

    let last = (sequence[0] == 0) ? 1 : 0;

    for (let i = 0; i < sequence.length; i++) 
    {
        let ctopA = document.createElement("td")
        let ctopB = document.createElement("td")

        let cmidA = document.createElement("td")
        let cmidB = document.createElement("td")

        let cbottom = document.createElement("td")
        cbottom.colSpan = 2;

        ctopA.classList.add("indicator", "zero", "signal");
        cmidA.classList.add("indicator", "signal");
        ctopB.classList.add("indicator", "zero", "signal");
        cmidB.classList.add("indicator", "signal");
        
        if (last == sequence[i]) 
        {
            cmidA.classList.add("on_left");
            ctopA.classList.add("on_left");

            if (last == 1) 
            {
                cmidA.classList.add("on_bottom");    
            }

            else
            {
                ctopA.classList.add("on_top");
            }
        }

        else
        {
            if (last == 0) 
            {
                cmidA.classList.add("on_bottom");    
            }

            else
            {
                ctopA.classList.add("on_top");
            }
        }

        ctopB.classList.add("on_left");
        cmidB.classList.add("on_left");

        if (sequence[i] == 0)
        {
            cmidB.classList.add("on_bottom");    
        }

        else
        {
            ctopB.classList.add("on_top");    
        }

        cbottom.innerHTML = sequence[i];
        cbottom.classList.add("binary_label");

        row_top.appendChild(ctopA);
        row_top.appendChild(ctopB);

        row_mid.appendChild(cmidA);
        row_mid.appendChild(cmidB);

        row_bottom.appendChild(cbottom);

        last = sequence[i];
    }

    table.appendChild(row_top);
    table.appendChild(row_mid);
    table.appendChild(row_bottom);
}


function diff_manchester(sequence)
{
    const parent = "diff_manchester_container"
    const id = "diff_manchester_table";
    create_container(parent);
    create_label(parent, "Manchester Diferencial");
    create_new_table(id, parent);

    let table = document.getElementById(id);
    let row_top = document.createElement("tr");
    let row_mid = document.createElement("tr");
    let row_bottom = document.createElement("tr");

    let up = true;

    for (let i = 0; i < sequence.length; i++) 
    {
        let ctopA = document.createElement("td")
        let ctopB = document.createElement("td")

        let cmidA = document.createElement("td")
        let cmidB = document.createElement("td")

        let cbottom = document.createElement("td")
        cbottom.colSpan = 2;

        ctopA.classList.add("indicator", "zero", "signal");
        cmidA.classList.add("indicator", "signal");
        ctopB.classList.add("indicator", "zero", "signal");
        cmidB.classList.add("indicator", "signal");

        if(sequence[i] == 0)
        {
            ctopA.classList.add("on_left");
            cmidA.classList.add("on_left");
            up = !up;
        }

        if (up)
            ctopA.classList.add("on_top");
        else
            cmidA.classList.add("on_bottom");

        up = !up;
        ctopB.classList.add("on_left");
        cmidB.classList.add("on_left");

        if (up)
            ctopB.classList.add("on_top");
        else
            cmidB.classList.add("on_bottom");

        cbottom.innerHTML = sequence[i];
        cbottom.classList.add("binary_label");

        row_top.appendChild(ctopA);
        row_top.appendChild(ctopB);

        row_mid.appendChild(cmidA);
        row_mid.appendChild(cmidB);

        row_bottom.appendChild(cbottom);
    }

    table.appendChild(row_top);
    table.appendChild(row_mid);
    table.appendChild(row_bottom);
}


function generate()
{
    let sequence = document.getElementById("sequence_in").value;
    document.getElementById("viewer_container").innerHTML = "";

    nrzl(sequence);
    nrzi(sequence);
    ami(sequence);
    pseudoternary(sequence);
    manchester(sequence);
    diff_manchester(sequence);
}