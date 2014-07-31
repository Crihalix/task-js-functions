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

		function showGallery(galleryParam) {
			for (var i = 0; i < galleryParam.images.length; i++) {
				console.log(galleryParam.images[i]);
			}
				console.log('----------------------------'); //просто для отделения в консоле (что бы не слипалось)
		}
		showGallery(gallery);

		// 1.1 додати слайд
		function addNewImage (galleryParam, name, path, description, date) {
			var newImg = {};
			newImg.name = name || "";
			newImg.path = path || "";
			newImg.description = description || "";
			newImg.date = Date.parse(date) || new Date();
			galleryParam.images.push(newImg);

		}

		//создание нового слайда
		console.log('1.1 Создание новго слайда "cato-dog"');
		addNewImage(gallery,'cato-dog','images/cato_dog.png',"Fanny animal:)", Date.now());

		showGallery(gallery);

	// 1.2 редагувати слайд (старый параметр меняем на новый)
		function editImage(galleryParam, oldName, newParam) {
			for (var i = 0; i < galleryParam.images.length; i++) {
				if (galleryParam.images[i].name === oldName) {
					galleryParam.images[i].name = newParam;
				} else if (galleryParam.images[i].path === oldName) {
					galleryParam.images[i].path = newParam;
				} else if (galleryParam.images[i].description === oldName) {
					galleryParam.images[i].description = newParam;
				} else if(galleryParam.images[i].date === oldName) {
					galleryParam.images[i].date = newParam || new Date() ;
				}
			}
		}
		console.log('1.2 меняем параметр "description" в слайда "cato-dog"');
		editImage(gallery, 'Fanny animal:)','sad animal:(');
		showGallery(gallery);

	
		// 1.3 удалить слайд (по названии картинки)
		function deleteImage (galleryParam, nameSlide) {

			console.log('Всех слайдов ' + galleryParam.images.length);

			for (var i = 0; i < galleryParam.images.length; i++) {
				if (galleryParam.images[i].name === nameSlide) {
					console.log('Вот этот слайд Вы удаляете "' + galleryParam.images[i].name + '"')
					galleryParam.images.splice(i,1); 

					console.log('Теперь всех слайдов ' + galleryParam.images.length);
				}
			}
		}

		console.log('1.3 Удаляем слайд "dinosaur"');
		deleteImage(gallery,'dinosaur');
		showGallery(gallery);


		// 3. Відсортувати картинки по зазначеному полю (поле передавати аргументом у функцію)
	
		function sortImages(galleryParam, methodSort) {
			galleryParam.images.sort(function compareName(nameA, nameB){
				return nameA[methodSort] > nameB[methodSort];
			});	
			
		}
			sortImages(gallery,'description');
			console.log('3. Отсортировано по имени "description"');
			showGallery(gallery);
			
			sortImages(gallery,'name');
			console.log('3. Отсортировано по имени "name" и т.д.');
			showGallery(gallery);

		
		// 4. Відфільтрувати картинки по переданому полю.
		console.log('4. Відфільтрувати картинки по переданому полю (в даном случае "description")');

		function filterImages(galleryParam, name) {
			var imagesWithoutField;
			for (var i = 0; i < galleryParam.images.length; i++) {
				if (galleryParam.images[i][name] == '') {
					imagesWithoutField = galleryParam.images[i];
					console.log(imagesWithoutField);
				}
			}
		}
		filterImages(gallery, 'description');
		console.log('-----------------------');

		//5. Серіалізувати галерею в формат JSON. Додати можливість серіалізувати поля по деякій умові. Наприклад, лише імена картинок, або лише картинки, що мають шлях до файла.
		console.log('5. Серіалізвати галерею в формат JSON. Додати можливість серіалізувати поля по деякій умові. Наприклад, лише імена картинок, або лише картинки, що мають шлях до файла.');

		function toStringAndToObject(galleryParam){

			var stringGallery = JSON.stringify(galleryParam,false, 1);
			console.log('------------------ в JSON')
			console.log(stringGallery);

			var galleryObject = JSON.parse(stringGallery, function(key, value) {
				if (key == 'date') return new Date(value);
				return value;
			});
			console.log('------------------ в Object')
			console.log(galleryObject);
		}
		toStringAndToObject(gallery);

		console.log('Сериализувати по условию')
		function serializName(galleryParam, serializParam) {
			var serializGallery = JSON.stringify(galleryParam.images, [serializParam],1);
			console.log(serializGallery)
		}
		serializName(gallery, 'name');


		//6. Написати функцію, що буде перевіряти, чи всі картинки мають опис.
		console.log('6. Написати функцію, що буде перевіряти, чи всі картинки мають опис.');

		function isImageDescription(galleryParam){
			for (var i = 0; i < galleryParam.images.length; i++) {
				if (galleryParam.images[i].description === '') {
					console.log(galleryParam.images[i].name + " - картинка не имеет описания.");
				}
			}
		}
		isImageDescription(gallery);

		//Створити ще одну галерею, та викликати функції першої галереї в контексті другої.
		console.log('------------------------------------------------------------------------------------------');
		console.log('Створити ще одну галерею, та викликати функції першої галереї в контексті другої.');

		var gallery2 = {
		images : [
				{
					"name": "Maikl",
					"path": "images/maikl.png",
					"description": "This is Maik",
					"date": "2014-07-21T09:05:34.540Z"
				},
				{
					"name": "Bill",
					"path": "images/dill.png",
					"description": "This is Bill",
					"date": "2014-07-21T09:06:05.544Z"
				},
				{
					"name": "Fill",
					"path": "images/fill.png",
					"description": "",
					"date": "2014-07-21T09:07:24.187Z"
				},
				{
					"name": "Jon",
					"path": "images/jon.png",
					"description": "This is Jon",
					"date": "2014-07-21T09:07:47.683Z"
				},
				{
					"name": "Den",
					"path": "images/den.png",
					"description": "",
					"date": "2014-07-21T09:07:47.683Z"
				}
			]
		};

		showGallery(gallery2);

		//создание
		addNewImage(gallery2,'Vasya','images/vasya.png',"vasya:)", Date.now());
		//вывод в консоль галерейки
		showGallery(gallery2);

		//редактирование
		editImage(gallery2, "vasya:)",'sad Vasya:(');
		showGallery(gallery2);

		//удаление
		deleteImage(gallery2,'Jon');
		showGallery(gallery2);

		//фильтер на отсутствие поля
		filterImages(gallery2, 'description');

		// переобразование в JSON и назад в Object
		toStringAndToObject(gallery2);
		//сериализовать по имени
		serializName(gallery2, 'name');
		//все ли картинки имеют описание
		isImageDescription(gallery2);