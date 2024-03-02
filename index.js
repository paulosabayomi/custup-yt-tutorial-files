// import CustUp from 'https://unpkg.com/custup@latest/src/custup.min.js' 

// OR the unminified version
import CustUp from "./custup/src/custup.js"

const instance1 = new CustUp({
    targetRootElement: "#container-1",
    // file_preview_animation_types: ['slideInRight', 'fadeIn'],
    // file_preview_animation_types: ['fadeIn'],
    file_preview_animation_types: null,

    default_files: [
        // {file: 'http://localhost/example_API_that_returns_blob_or_file', isUploadable: false, headers: {
        //     'Authorization': 'Bearer abcdefghijklm...'
        // }},
        // {file: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP4AAADGCAMAAADFYc2...', isUploadable: false}, // Note this is an incomplete base64 string
        {file: 'https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2014/05/luvisi16.jpg?resize=600%2C600&ssl=1', isUploadable: true}, // URL for a file that is uploadable
        {file: 'https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2014/05/luvisi16.jpg?resize=600%2C600&ssl=1', isUploadable: true}, // URL for a file that is uploadable
        {file: 'https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2014/05/luvisi16.jpg?resize=600%2C600&ssl=1', isUploadable: true}, // URL for a file that is uploadable
    ],
    // allowed_tools: ['added_files_count', 'add_file', 'upload',  'clear_files'],
    // allowed_tools: null,
})

// instance1.on('library.init', () => {
//     instance1.record_screen()
//     instance1.display_message('Hey this is a message')

// })

setTimeout(() => {
    // instance1.record_screen()
    // instance1.display_message('Hey this is a message')
}, 2000);

instance1.on('file.afterAdded', (ev) => {
    console.log("file added:", ev)
})




const instance2 = new CustUp({
    targetRootElement: "#container-2",
    ui_type: 'elegant',
    allowed_tools: null,
    disable_scrollbar: false,
    file_upload: {
        endpoint_url: 'http://localhost:6700/fileupload',
        files_field_name: 'profileImage',
        form_field: '#form',
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
        chunk_size: 1024 * 1024 * 20
    },
    css_font_link: "https://fonts.googleapis.com/css2?family=Jacquarda+Bastarda+9&display=swap",
    css_font_name: '"Jacquarda Bastarda 9", serif'
    
})

// instance2.record_screen()



// instance2.on('audio.recording', (ev) => {
//     console.log(ev)
// })

const instance3 = new CustUp({
    targetRootElement: "#container-3",
    // ui_type: 'elegant',
    // allowed_tools: null,
    default_styles_override: {
        innerContainer: ['custom_inner_container_style', true],
        headerContainer: "custom_header_style",
        custupInnerContainerWrapperEl: ['custom_wrapper_style', true],
        footerContainer: ['custom_footer_style', true],
        scrollBarEl: ['random_scrollbar_el', true],
    },
    disable_scrollbar: false,
    default_icons_override: {
        send: '<div>S</div>',
        eye: '<div>E</div>'
    },
})

const instance4 = new CustUp({
    targetRootElement: "#container-4",
    instance_attach: [instance1, instance2, instance3],
    single_upload: true,
    file_upload: {
        endpoint_url: 'http://localhost:6700/fileupload',
        files_field_name: 'profileImage',
        form_field: '#form',
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
    },
    css_font_link: "https://fonts.googleapis.com/css2?family=Jacquarda+Bastarda+9&display=swap",
    css_font_name: '"Jacquarda Bastarda 9", serif'
    // css_font_link: "https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap",
    // css_font_name: "Dancing Script",
})


document.querySelector('#submit').onclick = () => {
    instance4.upload();

    // console.log("attched files", instance4.get_all_files());
}


const instance5 = new CustUp({
    targetRootElement: "#container-5",
    ui_type: 'bare'
})

const instance6 = new CustUp({
    targetRootElement: "#container-6",
    ui_type: 'detached'
})

const instance7 = new CustUp({
    targetRootElement: "#container-7",
    ui_type: 'profilePicture'
})

const instance8 = new CustUp({
    targetRootElement: "#container-8",
    ui_type: 'resumeUploaderUI',
    allowed_file_types: ['pdf'],
    maximumAllowedFileSize: 10000000
})
