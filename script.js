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

function code_8b6t(sequence)
{
    const parent = "code_8b6t_container"
    const id = "code_8b6t_table";
    create_container(parent);
    create_label(parent, "8B6T");

    if (sequence.length	% 8 != 0) 
    {
        let hr = document.createElement("hr");
        document.getElementById(parent).appendChild(hr);

        let error = document.createElement("p");
        error.innerHTML = "<span style='color:#20C20E'>-></span> Esse código de linha codifica de 8 em 8. Favor, insira uma sequência de bits de tamanho múltiplo de 8.";
        document.getElementById(parent).appendChild(error);

        return;
    }   

    create_new_table(id, parent);

    let table = document.getElementById(id);
    let row_top = document.createElement("tr");
    let row_mid = document.createElement("tr");
    let row_bottom = document.createElement("tr");

    levels = table8b6t[sequence.slice(0, 8)];
    let last_level = levels[0];

    let line_weight = 0;

    for (let i = 0; i < sequence.length; i+=8) 
    {
        levels = table8b6t[sequence.slice(i, i+8)]

        signal_weight = levels.split("+").length - levels.split("-").length;

        if (line_weight == 1 && signal_weight == 1)
        {
            levels = levels.replace(/\+|-/g, v => v == "+" ? "-" : "+");
            signal_weight *= -1;
        }

        line_weight += signal_weight;

        for (let j = 0; j < 6; j++) 
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

        for (let k = 0; k < 3; k++) 
        {      
            let cbottom = document.createElement("td")
            row_bottom.appendChild(cbottom);        
        }

        cbottom = document.createElement("td");

        let p = document.createElement("p");
        p.classList.add("special_label");
        p.innerHTML = sequence.slice(i, i+8);

        cbottom.classList.add("binary_label");

        cbottom.appendChild(p);
        row_bottom.appendChild(cbottom);

        for (let k = 0; k < 2; k++) 
        {      
            let cbottom = document.createElement("td")
            row_bottom.appendChild(cbottom);        
        }
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
    code_8b6t(sequence);
}

const table8b6t = {
    "00000000": "-+00-+",
    "00100000": "-++-00",
    "01000000": "-00+0+",
    "01100000": "0++0-0",
    "00000001": "0-+-+0",
    "00100001": "+00+--",
    "01000001": "0-00++",
    "01100001": "+0+-00",
    "00000010": "0-+0-+",
    "00100010": "-+0-++",
    "01000010": "0-0+0+",
    "01100010": "+0+0-0",
    "00000011": "0-++0-",
    "00100011": "+-0-++",
    "01000011": "0-0++0",
    "01100011": "+0+00-",
    "00000100": "-+0+0-",
    "00100100": "+-0+00",
    "01000100": "-00++0",
    "01100100": "0++00-",
    "00000101": "+0--+0",
    "00100101": "-+0+00",
    "01000101": "00-0++",
    "01100101": "++0-00",
    "00000110": "+0-0-+",
    "00100110": "+00-00",
    "01000110": "00-+0+",
    "01100110": "++00-0",
    "00000111": "+0-+0-",
    "00100111": "-+++--",
    "01000111": "00-++0",
    "01100111": "++000-",
    "00001000": "-+00+-",
    "00101000": "0++-0-",
    "01001000": "00+000",
    "01101000": "0++-+-",
    "00001001": "0-++-0",
    "00101001": "+0+0--",
    "01001001": "++-000",
    "01101001": "+0++--",
    "00001010": "0-+0+-",
    "00101010": "+0+-0-",
    "01001010": "+-+000",
    "01101010": "+0+-+-",
    "00001011": "0-+-0+",
    "00101011": "+0+--0",
    "01001011": "-++000",
    "01101011": "+0+--+",
    "00001100": "-+0-0+",
    "00101100": "0++--0",
    "01001100": "0+-000",
    "01101100": "0++--+",
    "00001101": "+0-+-0",
    "00101101": "++00--",
    "01001101": "+0-000",
    "01101101": "++0+--",
    "00001110": "+0-0+-",
    "00101110": "++0-0-",
    "01001110": "0-+000",
    "01101110": "++0-+-",
    "00001111": "+0--0+",
    "00101111": "++0--0",
    "01001111": "-0+000",
    "01101111": "++0--+",
    "00010000": "0--+0+",
    "00110000": "+-00-+",
    "01010000": "+--+0+",
    "01110000": "000++-",
    "00010001": "-0-0++",
    "00110001": "0+--+0",
    "01010001": "-+-0++",
    "01110001": "000+-+",
    "00010010": "-0-+0+",
    "00110010": "0+-0-+",
    "01010010": "-+-+0+",
    "01110010": "000-++",
    "00010011": "-0-++0",
    "00110011": "0+-+0-",
    "01010011": "-+-++0",
    "01110011": "000+00",
    "00010100": "0--++0",
    "00110100": "+-0+0-",
    "01010100": "+--++0",
    "01110100": "000+0-",
    "00010101": "--00++",
    "00110101": "-0+-+0",
    "01010101": "--+0++",
    "01110101": "000+-0",
    "00010110": "--0+0+",
    "00110110": "-0+0-+",
    "01010110": "--++0+",
    "01110110": "000-0+",
    "00010111": "--0++0",
    "00110111": "-0++0-",
    "01010111": "--+++0",
    "01110111": "000-+0",
    "00011000": "-+0-+0",
    "00111000": "+-00+-",
    "01011000": "--0+++",
    "01111000": "+++--0",
    "00011001": "+-0-+0",
    "00111001": "0+-+-0",
    "01011001": "-0-+++",
    "01111001": "+++-0-",
    "00011010": "-++-+0",
    "00111010": "0+-0+-",
    "01011010": "0--+++",
    "01111010": "+++0--",
    "00011011": "+00-+0",
    "00111011": "0+--0+",
    "01011011": "0--0++",
    "01111011": "0++0--",
    "00011100": "+00+-0",
    "00111100": "+-0-0+",
    "01011100": "+--0++",
    "01111100": "-00-++",
    "00011101": "-+++-0",
    "00111101": "-0++-0",
    "01011101": "-000++",
    "01111101": "-00+00",
    "00011110": "+-0+-0",
    "00111110": "-0+0+-",
    "01011110": "0+++--",
    "01111110": "+---++",
    "00011111": "-+0+-0",
    "00111111": "-0+-0+",
    "01011111": "0++-00",
    "01111111": "+--+00",
    "10000000": "-00+-+",
    "10100000": "-++0-0",
    "11000000": "-+0+-+",
    "11100000": "-++0-+",
    "10000001": "0-0-++",
    "10100001": "+-+-00",
    "11000001": "0-+-++",
    "11100001": "+-++0",
    "10000010": "0-0+-+",
    "10100010": "+-+0-0",
    "11000010": "0-++-+",
    "11100010": "+-+0-+",
    "10000011": "0-0++-",
    "10100011": "+-+00-",
    "11000011": "0-+++-",
    "11100011": "+-++0-",
    "10000100": "-00++-",
    "10100100": "-++00-",
    "11000100": "-+0++-",
    "11100100": "-+++0-",
    "10000101": "00--++",
    "10100101": "++--00",
    "11000101": "+0--++",
    "11100101": "++--+0",
    "10000110": "00-+-+",
    "10100110": "++-0-0",
    "11000110": "+0-+-+",
    "11100110": "++-0-+",
    "10000111": "00-++-",
    "10100111": "++-00-",
    "11000111": "+0-++-",
    "11100111": "++-+0-",
    "10001000": "-000+0",
    "10101000": "-++-+-",
    "11001000": "-+00+0",
    "11101000": "-++0+-",
    "10001001": "0-0+00",
    "10101001": "+-++--",
    "11001001": "0-++00",
    "11101001": "+-++-0",
    "10001010": "0-00+0",
    "10101010": "+-+-+-",
    "11001010": "0-+0+0",
    "11101010": "+-+0+-",
    "10001011": "0-000+",
    "10101011": "+-+--+",
    "11001011": "0-+00+",
    "11101011": "+-+-0+",
    "10001100": "-0000+",
    "10101100": "-++--+",
    "11001100": "-+000+",
    "11101100": "-++-0+",
    "10001101": "00-+00",
    "10101101": "++-+--",
    "11001101": "+0-+00",
    "11101101": "++-+-0",
    "10001110": "00-0+0",
    "10101110": "++--+-",
    "11001110": "+0-0+0",
    "11101110": "++-0+-",
    "10001111": "00-00+",
    "10101111": "++---+",
    "11001111": "+0-00+",
    "11101111": "++--0+",
    "10010000": "+--+-+",
    "10110000": "+000-0",
    "11010000": "+-0+-+",
    "11110000": "+000-+",
    "10010001": "-+--++",
    "10110001": "0+0-00",
    "11010001": "0+--++",
    "11110001": "0+0-+0",
    "10010010": "-+-+-+",
    "10110010": "0+00-0",
    "11010010": "0+-+-+",
    "11110010": "0+00-+",
    "10010011": "-+-++-",
    "10110011": "0+000-",
    "11010011": "0+-++-",
    "11110011": "0+0+0-",
    "10010100": "+--++-",
    "10110100": "+0000-",
    "11010100": "+-0++-",
    "11110100": "+00+0-",
    "10010101": "--+-++",
    "10110101": "00+-00",
    "11010101": "-0+-++",
    "11110101": "00+-+0",
    "10010110": "--++-+",
    "10110110": "00+0-0",
    "11010110": "-0++-+",
    "11110110": "00+0-+",
    "10010111": "--+++-",
    "10110111": "00+00-",
    "11010111": "-0+++-",
    "11110111": "00++0-",
    "10011000": "+--0+0",
    "10111000": "+00-+-",
    "11011000": "+-00+0",
    "11111000": "+000+-",
    "10011001": "-+-+00",
    "10111001": "0+0+--",
    "11011001": "0+-+00",
    "11111001": "0+0+-0",
    "10011010": "-+-0+0",
    "10111010": "0+0-+-",
    "11011010": "0+-0+0",
    "11111010": "0+00+-",
    "10011011": "-+-00+",
    "10111011": "0+0--+",
    "11011011": "0+-00+",
    "11111011": "0+0-0+",
    "10011100": "+--00+",
    "10111100": "+00--+",
    "11011100": "+-000+",
    "11111100": "+00-0+",
    "10011101": "--++00",
    "10111101": "00++--",
    "11011101": "-0++00",
    "11111101": "00++-0",
    "10011110": "--+0+0",
    "10111110": "00+-+-",
    "11011110": "-0+0+0",
    "11111110": "00+0+-",
    "10011111": "--+00+",
    "10111111": "00+--+",
    "11011111": "-0+00+",
    "11111111": "00+-0+"
  };
  
  