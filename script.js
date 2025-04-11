function create_new_table(id)
{
    let table = document.createElement("table");
    table.id = id;
    document.getElementById("viewer_container").appendChild(table);
}

function nrzl(sequence)
{
    const id = "nrzl_table";
    create_new_table(id);

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

function generate()
{
    sequence = document.getElementById("sequence_in").value;
    document.getElementById("viewer_container").innerHTML = "";
    
    nrzl(sequence);
    
}