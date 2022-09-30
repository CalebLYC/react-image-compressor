export default function fetchFile(url) {
    fetch(url).then(res => res.blob()).then(file => {
        let filename = url.replace(/^.*[\\/]/, '');
        return { fileUrl: URL.createObjectURL(file), filename };
    }).catch(() => {
        return 'Failed to download file!';
    })
}