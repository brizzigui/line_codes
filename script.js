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

    let last = sequence[0];

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

function code_4dpam5(sequence)
{
    const parent = "code_4dpam5_container"
    const id = "code_4dpam5_table";
    create_container(parent);
    create_label(parent, "4D-PAM5");

    if (sequence.length	% 2 != 0) 
    {
        let hr = document.createElement("hr");
        document.getElementById(parent).appendChild(hr);

        let error = document.createElement("p");
        error.innerHTML = "<span style='color:#20C20E'>-></span> Esse código de linha codifica de 2 em 2. Favor, insira uma sequência de bits de tamanho par.";
        document.getElementById(parent).appendChild(error);

        return;
    }   

    let br = document.createElement("br");
    document.getElementById(parent).appendChild(br);

    create_new_table(id, parent);

    let table = document.getElementById(id);
    let row_top = document.createElement("tr");
    let row_mid_top = document.createElement("tr");
    let row_mid = document.createElement("tr");
    let row_mid_bottom = document.createElement("tr");
    let row_bottom = document.createElement("tr");

    let ctop = document.createElement("td");
    let cmidtop = document.createElement("td");
    let cmid = document.createElement("td");
    let cmidbottom = document.createElement("td");
    let cbottom = document.createElement("td");

    ctop.innerHTML = "+2";
    cmidtop.innerHTML = "+1";
    cmid.innerHTML = "0";
    cmidbottom.innerHTML = "-1";
    cbottom.innerHTML = "-2";

    ctop.classList.add("level_label");
    cmidtop.classList.add("level_label");
    cmid.classList.add("level_label");
    cmidbottom.classList.add("level_label");
    cbottom.classList.add("level_label");

    row_top.appendChild(ctop);
    row_mid_top.appendChild(cmidtop);
    row_mid.appendChild(cmid);
    row_mid_bottom.appendChild(cmidbottom);
    row_bottom.appendChild(cbottom);

    table.appendChild(row_top);
    table.appendChild(row_mid_top);
    table.appendChild(row_mid);
    table.appendChild(row_mid_bottom);
    table.appendChild(row_bottom);

    let last = sequence.slice(0, 2);

    for (let i = 0; i < sequence.length; i+=2) 
    {
        let ctop = document.createElement("td")
        let cmidtop = document.createElement("td")
        let cmid = document.createElement("td")
        let cmidbottom = document.createElement("td")
        let cbottom = document.createElement("td")

        ctop.classList.add("indicator");
        cmidtop.classList.add("indicator");
        cmid.classList.add("indicator");
        cmidbottom.classList.add("indicator");

        ctop.classList.add("signal");
        cmidtop.classList.add("signal");        
        cmid.classList.add("signal");
        cmidbottom.classList.add("signal");
        
        cmidtop.classList.add("zero");

        if (sequence.slice(i, i+2) == "00")
        {
            cmidbottom.classList.add("on_bottom");

            if (last == "01")
            {
                cmidbottom.classList.add("on_left");
            }

            else if (last == "10")
            {
                cmidbottom.classList.add("on_left");
                cmid.classList.add("on_left");
                cmidtop.classList.add("on_left");
            }

            else if(last == "11")
            {
                cmidbottom.classList.add("on_left");
                cmid.classList.add("on_left");
                cmidtop.classList.add("on_left");
                ctop.classList.add("on_left");
            }
        }

        else if (sequence.slice(i, i+2) == "01")
        {
            cmid.classList.add("on_bottom");
            if (last == "00")
            {
                cmidbottom.classList.add("on_left");
            }

            else if (last == "10")
            {
                cmid.classList.add("on_left");
                cmidtop.classList.add("on_left");
            }

            else if(last == "11")
            {
                cmid.classList.add("on_left");
                cmidtop.classList.add("on_left");
                ctop.classList.add("on_left");
            }
        }

        else if (sequence.slice(i, i+2) == "10")
        {
            cmidtop.classList.add("on_top");
            if (last == "00")
            {
                cmidbottom.classList.add("on_left");
                cmid.classList.add("on_left");
                cmidtop.classList.add("on_left");
            }

            else if (last == "01")
            {
                cmid.classList.add("on_left");
                cmidtop.classList.add("on_left");
            }

            else if(last == "11")
            {
                ctop.classList.add("on_left");
            }
        }

        else
        {
            ctop.classList.add("on_top");
            if (last == "00")
            {
                cmidbottom.classList.add("on_left");
                cmid.classList.add("on_left");
                cmidtop.classList.add("on_left");
                ctop.classList.add("on_left");
            }

            else if (last == "01")
            {
                cmid.classList.add("on_left");
                cmidtop.classList.add("on_left");
                ctop.classList.add("on_left");
            }

            else if(last == "10")
            {
                ctop.classList.add("on_left");
            }
        }

        cbottom.innerHTML = sequence.slice(i, i+2);
        cbottom.classList.add("binary_label");

        for (let k = 0; k < 2; k++) 
        {
            row_top.appendChild(ctop);
            row_mid_top.appendChild(cmidtop);
            row_mid.appendChild(cmid);
            row_mid_bottom.appendChild(cmidbottom);
        }

        row_bottom.appendChild(cbottom);

        last = sequence.slice(i, i+2);
    }

    table.appendChild(row_top);
    table.appendChild(row_mid_top);
    table.appendChild(row_mid);
    table.appendChild(row_mid_bottom);
    table.appendChild(row_bottom);
}

function encode_4b3t(sequence, dc)
{
    if (sequence == "0000")
    {
        if (dc == 1)
            return ["+0+", 2];

        else
            return ["0-0", -1];
    }

    else if(sequence == "0001")
    {
        return ["0-+", 0];
    }
    else if(sequence == "0010")
    {
        return ["+-0", 0];
    }
    else if(sequence == "0011")
    {
        if(dc == 4)
            return ["--0", -2];
        else
            return ["00+", 1];
    }
    else if(sequence == "0100")
    {
        return ["-+0", 0];
    }
    else if(sequence == "0101")
    {
        if(dc == 1)
            return ["0++", 2];
        else
            return ["-00", -1];
    }
    else if(sequence == "0110")
    {
        if(dc == 1 || dc == 2)
            return ["-++", 1];
        else
            return ["--+", -1];
    }
    else if(sequence == "0111")
    {
        return ["-0+", 0];
    }
    else if(sequence == "1000")
    {
        if(dc == 4)
            return ["0--", -2];
        else
            return ["+00", 1];
    }
    else if(sequence == "1001")
    {
        if(dc == 4)
            return ["---", -3];
        else
            return ["+-+", 1];
    }
    else if(sequence == "1010")
    {
        if(dc == 1 || dc == 2)
            return ["++-", 1];
        else
            return ["+--", -1];
    }
    else if(sequence == "1011")
    {
        return ["+0-", 0];
    }
    else if(sequence == "1100")
    {
        if(dc == 1)
            return ["+++", 3];
        else 
            return ["-+-", -1];
    }
    else if(sequence == "1101")
    {
        if(dc == 4)
            return ["-0-", -2];
        else
            return ["0+0", 1];
    }
    else if(sequence == "1110")
    {
        return ["0+-", 0];
    }
    else
    {
        if(dc == 1)
            return ["++0", 2];
        else
            return ["00-", -1];
    }

}

function code_4b3t(sequence)
{
    const parent = "code_4b3t_container"
    const id = "code_4b3t_table";
    create_container(parent);
    create_label(parent, "4B3T");

    if (sequence.length	% 4 != 0) 
    {
        let hr = document.createElement("hr");
        document.getElementById(parent).appendChild(hr);

        let error = document.createElement("p");
        error.innerHTML = "<span style='color:#20C20E'>-></span> Esse código de linha codifica de 4 em 4. Favor, insira uma sequência de bits de tamanho múltiplo de 4.";
        document.getElementById(parent).appendChild(error);

        return;
    }   

    create_new_table(id, parent);

    let table = document.getElementById(id);
    let row_top = document.createElement("tr");
    let row_mid = document.createElement("tr");
    let row_bottom = document.createElement("tr");

    let dc_offset = 1;

    encoding = encode_4b3t(sequence.slice(0, 4), dc_offset);
    levels = encoding[0];
    let last_level = levels[0];


    for (let i = 0; i < sequence.length; i+=4) 
    {
        encoding = encode_4b3t(sequence.slice(i, i+4), dc_offset);
        levels = encoding[0];
        dc_offset += encoding[1];

        for (let j = 0; j < 3; j++) 
        {
            let ctop = document.createElement("td")
            let cmid = document.createElement("td")

            ctop.classList.add("indicator");
            ctop.classList.add("zero");
            cmid.classList.add("indicator");

            ctop.classList.add("signal");
            cmid.classList.add("signal");

            if (levels[j] == 0)
            {
                ctop.classList.add("on_bottom");
                if (last_level == "+")
                    ctop.classList.add("on_left");
                else if(last_level == "-")
                    cmid.classList.add("on_left");
            }

            else if (levels[j] == "+")
            {
                ctop.classList.add("on_top");
                if (last_level == "0")
                    ctop.classList.add("on_left");
                else if(last_level == "-")
                {
                    ctop.classList.add("on_left");
                    cmid.classList.add("on_left");
                }
            }

            else
            {
                cmid.classList.add("on_bottom");
                if (last_level == "0")
                    cmid.classList.add("on_left");
                else if(last_level == "+")
                {
                    ctop.classList.add("on_left");
                    cmid.classList.add("on_left");
                }
            }

            row_top.appendChild(ctop);
            row_mid.appendChild(cmid);

            last_level = levels[j];
        }

        let cbottom = document.createElement("td")
        row_bottom.appendChild(cbottom);

        cbottom = document.createElement("td")
        cbottom.innerHTML = sequence.slice(i, i+4);
        cbottom.classList.add("binary_label");
        row_bottom.appendChild(cbottom);

        cbottom = document.createElement("td")
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
    code_4dpam5(sequence)
    code_4b3t(sequence);
}