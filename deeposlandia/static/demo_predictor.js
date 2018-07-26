// Load a new image from the static directory on click
document.getElementById("predict_labels").addEventListener("click", function(){

  console.log("Randomly pick an image filename");
  get_image_name(dataset);
});

function get_image_name(dataset, filename_callback){
  $.ajax({type: 'GET',
	  url: '/demo_image_selector',
	  data: {dataset: dataset},
	  success: function(response){
	    move_to_image_url(response.image_name, dataset, model);
	    console.log("File " + response.image_name + " will be used as demo...");
	    console.log("dataset = " + dataset);
	    console.log("model = " + model);
	    console.log("Prediction and URL update OK!");
	  }
	 });
}

function move_to_image_url(filename, dataset, model){

    var url = flask_util.url_for('predictor_demo', {dataset: dataset,
						    model: model,
						    image: filename})
    $(location).attr('href', url)
};
