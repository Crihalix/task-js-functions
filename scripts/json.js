var gallery = {
		images : [
			{
				"name": "cat",
				"path": "images/cat.png",
				"description": "The best cat ever",
				"date": "2014-07-21T09:05:34.540Z"
			},
			{
				"name": "dog",
				"path": "images/dog.png",
				"description": "The best dof ever",
				"date": "2014-07-21T09:06:05.544Z"
			},
			{
				"name": "giraffe",
				"path": "images/giraffe.png",
				"description": "",
				"date": "2014-07-21T09:07:24.187Z"
			},
			{
				"name": "dinosaur",
				"path": "images/dinosaur.png",
				"description": "The best dinosaur ever",
				"date": "2014-07-21T09:07:47.683Z"
			}
		]
	};

		//	2. Написати функцію, що буде виводити на екран інформацію про передані картинки галереї. Та використовувати її для виведення результату роботи всіх функцій галереї.
		function showGallery() {
			for (var i = 0; i < gallery.images.length; i++) {
				if (i === 4) {
					console.log('This is new image gallery');
				}
				console.log(gallery.images[i]);
			};
		};

		// 1.1 додати слайд
		function addNewImage (name, path, description, date) {
			var newImg = {};
			newImg.name = name || "";
			newImg.path = path || "";
			newImg.description = description || "";
			newImg.date = date || "";
			gallery.images.push(newImg);
//			showGallery();
		}

		addNewImage('cato-dog','images/cato_dog.png',"Fanny animall:)","2014-07-27T09:07:47.683Z");





		showGallery();


		// 1.2 редагувати слайд
		console.log(gallery.images[1].name)

		function editImage (oldName, newName) {
			for (var i = 0; i < gallery.images.length; i++) {
				if (gallery.images[i].name === oldName) {
					gallery.images[i].name = newName;
				}
			};
			showGallery();
		}
// to be continue...