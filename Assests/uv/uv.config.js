self.__uv$config = {
    prefix: '/uv/service/',
    bare: 'https://savethetrees.sen.org.nz/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: './Assests/uv/uv.handler.js',
    bundle: './Assests/uv/uv.bundle.js',
    config: './Assests/uv/uv.config.js',
    sw: './Assests/uv/uv.sw.js',
};