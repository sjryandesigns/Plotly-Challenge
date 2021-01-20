
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
        var otu_labels = sampleData.samples[0].otu_labels.slice(0,10).reverse();
        console.log(otu_labels);
        var sampleValue = sampleData.samples[0].sample_values.slice(0,10).reverse();
        console.log(sampleValue); 
    
        var topTenOTU = otu_ids.slice(0,10).reverse();
        console.log(topTenOTU);
    
        var topTenLabels = topTenOTU.map((otu => "OTU " + otu));
        console.log(topTenLabels)
    

// // Top 10 OTUs found in single ID >> sample_values(values), otu_ids(labels), otu_labels (hovertext)
        var bartrace = {
            x: sampleValue,
            y: topTenLabels,
            hovertext: otu_labels,
            type: "bar",
            orientation: "h",
        };
        
        // data
        var bardata = [bartrace];
        
        //  Create a layout, what else can you do here besides titles?
        var layout = {
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

        Plotly.newPlot("bar", bardata, layout)

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




















// // Plot Bubble Chart

// var trace1 = {
//     x: [1, 2, 3, 4],
//     y: [10, 11, 12, 13],
//     text: ['A<br>size: 40', 'B<br>size: 60', 'C<br>size: 80', 'D<br>size: 100'],
//     mode: 'markers',
//     marker: {
//       color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
//       size: [40, 60, 80, 100]
//     }
//   };
  
//   var data = [trace1];
  
//   var layout = {
//     title: 'Bubble Chart Hover Text',
//     showlegend: false,
//     height: 600,
//     width: 600
//   };
  
//   Plotly.newPlot('myDiv', data, layout);


// Define error function


// Display same metadata

// Display key-value pair from metadata JSON object 
// 
