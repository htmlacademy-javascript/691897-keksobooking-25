const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const avatarFileChooser = document.querySelector('.ad-form__field input[type="file"]');
const avatarPreview = document.querySelector('.ad-form-header__preview img');
const fileChooser = document.querySelector('.ad-form__upload input[type="file"]');
const previewBlock = document.querySelector('.ad-form__photo');

avatarFileChooser.addEventListener('change', () => {
  const avatarFile = avatarFileChooser.files[0];
  const avatarFileName = avatarFile.name.toLowerCase();
  const matches = FILE_TYPES.some((type) => avatarFileName.endsWith(type));

  if (matches) {
    avatarPreview.src = URL.createObjectURL(avatarFile);
  }
});

fileChooser.addEventListener('change', () => {
  const preview = document.createElement('img');
  previewBlock.appendChild(preview);
  preview.setAttribute('height', '70');
  preview.setAttribute('width', '70');
  const housingPhotoFile = fileChooser.files[0];
  const housingPhotoFileName = housingPhotoFile.name.toLowerCase();

  const matches = FILE_TYPES.some((type) => housingPhotoFileName.endsWith(type));

  if (matches) {
    preview.src = URL.createObjectURL(housingPhotoFile);
  }
});

const resetPictures = () => {
  avatarPreview.src = 'img/muffin-grey.svg';
  previewBlock.innerHTML = '';
};

export { resetPictures };
