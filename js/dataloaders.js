// dataloaders.js
// 

// function SlideDataLoader(){
// 	function loadingSlideInfo(){

// 	}
// 	var checkCoreIsReady = setInterval(function () {
// 		if($CAMIC) {
// 			clearInterval(checkCoreIsReady);
// 			//load data
// 			loadingSlideInfo();
// 		}
// 	}, 1000);
// }

function FormTempaltesLoader(){

	function loadingFormTemplates(){
		
		$UI.message.add('Start loading Templates');
		$CAMIC.store.findTemplate()
		//
		.then(function(temps){
			// get templates data
			$D.templates = temps;
		})
		//
		.catch(function(error){
			// templates schema
			
			console.error(error);
		})
		//
		.finally(function(){
			if($D.templates){
				// set successful message
				$UI.message.add('Templates loaded');
				// load UI
			}else{
				// set message
				$UI.message.addError('Loading Templates is Error');
				
			}
		});
	}

	var checkCoreIsReady = setInterval(function () {
		if($CAMIC) {
			clearInterval(checkCoreIsReady);
			//load data
			loadingFormTemplates();
		}
	}, 500);
}

function OverlayersLoader(){
	function loadingOverlayers(){

		$UI.message.add('Start loading Overlayers');
		$CAMIC.store.findMark($D.params.slideId)
		//
		.then(function(layers){
			typeIds = {};
			$D.overlayers = [];
			// convert part not nesscary
			for(let i = 0 ;i < layers.length;i++){
				$D.overlayers.push(covertToLayViewer(layers[i],($D.params.states)?$D.params.states.l:null));
			}
			//$D.overlayers = layers.map(covertToLayViewer)
		})
		//
		.catch(function(error){
			// overlayers schema
			
			console.error(error);
		})
		//
		.finally(function(){
			if($D.overlayers){
				// set successful message
				$UI.message.add('Overlayers loaded');
				// load UI
			}else{
				// set message
				$UI.message.addError('Loading Overlayers is Error');
				
			}
		});
	}

	var checkCoreIsReady = setInterval(function () {
		if($CAMIC) {
			clearInterval(checkCoreIsReady);
			//load data
			loadingOverlayers();
		}
	}, 500);
}
