import simpleEncrypt from 'simple-encryptor';

export default function decrypt( key, str ) {
  const encryptor = simpleEncrypt( key );
  const decrypted = encryptor.decrypt( str );
  return ( new TextDecoder( 'utf-8' ) ).decode( new Uint8Array( decrypted.data ) );
}
