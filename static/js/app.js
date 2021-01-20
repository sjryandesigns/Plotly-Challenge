// // Handler and listener for capturing user input
// d3.selectAll("#selDataset").on("change", updatePlotly);

// function updatePlotly() {

//     var dropdownMenu = d3.select("#selDataset");
//     var sampleID = dropdownMenu.property("values");

    




// Update dashboard with user input


// Initialize dashboard


// Read in data and console log
// Top 10 OTUs found in single ID >> sample_values(values), otu_ids(labels), otu_labels (hovertext)
// BUbble chart >> otu_ids (x values, marker color), sample_values(y values & marker size), otu_labels (text values)
// Sample metadata (demographic information) for each ID


// Display key-value pair from metadata JSON object 

d3.json("samples.json").then((sampleData)=>{
    console.log(sampleData)
  // Save data into variables

    // var sampleValuesSort = sampleData.samples[0].sample_values.sort((a,b) => b.sample_values-a.sample_values);
    // console.log(sampleValuesSort)

    }
    )

  
    














// // Plot Bar Chart
// function buildPlot() {


//     var trace1 = {
//         x: reversedData.map(object => object.greekSearchResults),
//         y: reversedData.map(object => object.greekName),
//         text: reversedData.map(object => object.greekName),
//         name: "Greek",
//         type: "bar",
//         orientation: "h"
//       };
      
//       // data
//       var data = [trace1];
      
//       //  Create a layout, what else can you do here besides titles?
//       var layout = {
//         title: "Greek gods search results",
//         margin: {
//           l: 100,
//           r: 100,
//           t: 100,
//           b: 100
//         }
//       };






// Plot Bubble Chart



// Define error function


// Display same metadata

// Display key-value pair from metadata JSON object 







// Plot Gauge chart