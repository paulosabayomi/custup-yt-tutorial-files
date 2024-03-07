import CustUp from 'https://unpkg.com/custup@latest/src/custup.min.js';

const instance1 = new CustUp({
    targetRootElement: '#t-container-1',
    allowed_file_types: ['mp3', "mp4", "jpg", "png", "jpeg"],
    // file_preview_animation_types: ['slideInLeft'],
    css_font_link: "https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap",
    css_font_name: "Dancing Script",
    default_styles_override: {
        innerContainer: ['innerContainer_custom', true],
        custupInnerContainerWrapperEl: ['inner_container_wrapper', true],
        headerContainer: ['header_cont', true],
        footerContainer: 'footer_container',
        sidebarRightContainer: 'side_bar_right',
    },
})

instance1.addEventListener('library.init', (e) => {
    console.log("library has finished initializing", e);
})

document.querySelector('#preview').onclick = (e) => {
    const file_id = instance1.get_all_files()[0].id;

    instance1.preview_file(file_id)
}

instance1.setOptions({
    file_preview_animation_types: ['zoomIn'],
})



const instance2 = new CustUp({
    targetRootElement: '#t-container-2',
    // allowed_file_types: ['mp3', "mp4", "jpg", "png", "jpeg"],
    ui_type: 'detached'
})

instance2.on('file.afterAdded', (e) => {
    console.log("file was added", e, e.detail)
})

const instance3 = new CustUp({
    targetRootElement: '#t-container-3',
    // allowed_file_types: ['mp3', "mp4", "jpg", "png", "jpeg"],
    ui_type: 'elegant',
    file_upload_settings: {
        endpoint_url: 'http://localhost:6700/fileupload',
        files_field_name: 'file',
        form_field: document.querySelector('#form'),
        additional_data: {
            userid: 1234567890,
            username: 'johndoe',
        },
        axios_settings: {
            headers: {
                'Authorization': 'Bearer test_test_abcdefghijkl'
            },
            configs: {}
        },
        should_chunk: true,
        chunk_size: 1024 * 1024 * 5
    }
})

const instance4 = new CustUp({
    targetRootElement: '#t-container-4',
    // allowed_file_types: ['mp3', "mp4", "jpg", "png", "jpeg"],
    ui_type: 'resumeUploaderUI',
    instance_attach: [instance1, instance2, instance3],
    single_upload: true,
    file_upload_settings: {
        endpoint_url: 'http://localhost:6700/fileupload',
        files_field_name: 'file',
        form_field: document.querySelector('#form'),
        additional_data: {
            userid: 1234567890,
            username: 'johndoe',
        },
        axios_settings: {
            headers: {
                'Authorization': 'Bearer test_test_abcdefghijkl'
            },
            configs: {}
        }
    }
})

document.querySelector('#submit').onclick = (e) => {
    console.log('I was clicked')
    instance4.upload()
}

const instance5 = new CustUp({
    targetRootElement: '#t-container-5',
    // allowed_file_types: ['mp3', "mp4", "jpg", "png", "jpeg"],
    ui_type: 'bare'
})