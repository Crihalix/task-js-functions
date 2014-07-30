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
				console.log(gallery.images[i]);
			}
				console.log('----------------------------'); //просто для отделения в консоле (что бы не слипалось)
		}
		showGallery();

		// 1.1 додати слайд
		function addNewImage (name, path, description, date) {
			var newImg = {};
			newImg.name = name || "";
			newImg.path = path || "";
			newImg.description = description || "";
			newImg.date = date || "";
			gallery.images.push(newImg);
		}

		//создание нового слайда
		console.log('Создание новго слайда "cato-dog"');
		addNewImage('cato-dog','images/cato_dog.png',"Fanny animal:)","2014-07-27T09:07:47.683Z");

		showGallery();


		// 1.2 редагувати слайд (старый параметр меняем на новый)
		function editImage(oldName, newParam) {
			for (var i = 0; i < gallery.images.length; i++) {
				if (gallery.images[i].name === oldName) {
					gallery.images[i].name = newParam;
				} else if (gallery.images[i].path === oldName) {
					gallery.images[i].path = newParam;
				} else if (gallery.images[i].description === oldName) {
					gallery.images[i].description = newParam;
				} else if(gallery.images[i].date === oldName) {
					gallery.images[i].date = newParam || new Date() ;
				}
			}
			showGallery();
		}
		console.log('меняем параметр "description" в слайда "cato-dog"');
		editImage('Fanny animal:)','sad animal:(')


		// 1.3 удалить слайд (по названии картинки)
		function deleteImage (nameSlide) {

			console.log('Всех слайдов ' + gallery.images.length);

			for (var i = 0; i < gallery.images.length; i++) {
				if (gallery.images[i].name === nameSlide) {
					console.log('Вот этот слайд Вы удаляете "' + gallery.images[i].name + '"')
					gallery.images.splice(i,1); 

					console.log('Теперь всех слайдов ' + gallery.images.length);
				}
			}
			showGallery();
		}

		console.log('Удаляем слайд "dinosaur"');
		deleteImage('dinosaur');


		// 3. Відсортувати картинки по зазначеному полю (поле передавати аргументом у функцію)
	
		function sortImages(methodSort) {
			gallery.images.sort(function compareName(nameA, nameB){
				return nameA[methodSort] > nameB[methodSort];
			});	
			
		}
			sortImages('description');
			console.log('3. Отсортировано по имени "description"');
			showGallery();
			
			sortImages('name');
			console.log('3. Отсортировано по имени "name" и т.д.');
			showGallery();

		
		// 4. Відфільтрувати картинки по переданому полю.
		console.log('4. Відфільтрувати картинки по переданому полю')
		function filterGallery(galleryArr, i) {
			var filter = "";
		       filter = JSON.stringify(galleryArr, [i]);
			filter = JSON.parse(filter);
		}
		filterGallery(gallery.images, "description");
		showGallery();
 

// to be continue...