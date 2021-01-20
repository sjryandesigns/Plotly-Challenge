
// Read in data and console log

// BUbble chart >> otu_ids (x values, marker color), sample_values(y values & marker size), otu_labels (text values)

// d3.json("samples.json").then((sampleData)=>{
//     console.log(sampleData)

//     // Save data into variables
//     var otu_ids = sampleData.samples[0].otu_ids;
//     console.log(otu_ids);
//     var otu_labels = sampleData.samples[0].otu_labels.slice(0,10);
//     console.log(otu_labels);
//     var sample_values = sampleData.samples[0].sample_values.slice(0,10);
//     console.log(sample_values); 

//     var topTenOTU = otu_ids.slice(0,10);
//     console.log(topTenOTU);

//     var topTenLabels = topTenOTU.map((otu => "OTU " + otu));
//     console.log(topTenLabels)
// })


// Plot Bar Chart
// function buildPlot() {
    d3.json("samples.json").then((sampleData)=>{
        console.log(sampleData)
    
        // Save data into variables
        var otu_ids = sampleData.samples[0].otu_ids;
        console.log(otu_ids);
        var otu_labels = sampleData.samples[0].otu_labels;
        console.log(otu_labels);
        var sampleValue = sampleData.samples[0].sample_values;
        console.log(sampleValue); 
    
        var topTenOTU = otu_ids.slice(0,10).reverse();
        console.log(topTenOTU);
    
        var topTenLabels = topTenOTU.map((otu => "OTU " + otu));
        console.log(topTenLabels)
    

// // Top 10 OTUs found in single ID >> sample_values(values), otu_ids(labels), otu_labels (hovertext)
        var barTrace = {
            x: sampleValue.slice(0,10).reverse(),
            y: topTenLabels,
            hovertext: otu_labels.slice(0,10).reverse(),
            type: "bar",
            orientation: "h",
        };
        
        // data
        var barData = [barTrace];
        
        //  Create a layout, what else can you do here besides titles?
        var barLayout = {
            title: "Top 10 OTU",
            // yaxis:{
            //     tickmode: "linear",
            // },
            margin: {
            l: 100,
            r: 100,
            t: 100,
            b: 30
            }
        };

        Plotly.newPlot("bar", barData, barLayout)

        // Plot Bubble Chart

        var bubbleTrace = {
            x: otu_ids,
            y: sampleValue,
            text: otu_labels,
            mode: 'markers',
            marker: {
                color: otu_ids,
                size: sampleValue,
            }
        };
    
        var bubbleData = [bubbleTrace];
    
        var bubbleLayout = {
            xaxis:{
                title: "OTU ID"
            },
            showlegend: false,
            height: 600,
            width: 1000,
        };
        
        Plotly.newPlot('bubble', bubbleData, bubbleLayout);







    });

  













    


// // // Handler and listener for capturing user input
// // d3.selectAll("#selDataset").on("change", updatePlotly);

// // function updatePlotly() {

// //     var dropdownMenu = d3.select("#selDataset");
// //     var sampleID = dropdownMenu.property("values");

    




// // Update dashboard with user input


// // Initialize dashboard



// // Sample metadata (demographic information) for each ID


// // Display key-value pair from metadata JSON object 























// Define error function


// Display same metadata

// Display key-value pair from metadata JSON object 
// 
