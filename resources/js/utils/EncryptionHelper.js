import forge from 'node-forge';
import CryptoJS from 'crypto-js';
import NodeRSA from 'node-rsa';
import { PUBLIC_KEY } from '../utils/constants';

export const encryptWithPublicKey = ( dataString ) =>
{
  // Create an RSA key using the public key
  const publicKeyObject = forge.pki.publicKeyFromPem( PUBLIC_KEY );

  // Convert the password to bytes
  const passwordBytes = forge.util.encodeUtf8( dataString );

  // Encrypt the password using the RSA public key
  const encryptedPasswordBytes = publicKeyObject.encrypt( passwordBytes );

  // Convert the encrypted bytes to base64 string
  const encryptedPassword = forge.util.encode64( encryptedPasswordBytes );

  return encryptedPassword;
};

// Define a function to generate a random key of a given size
export const generateRandomKey = () =>
{
  return CryptoJS.lib.WordArray.random( 256 / 8 );
};

// Generate a random IV of 16 bytes
export const generateRandomIV = () =>
{
  return CryptoJS.lib.WordArray.random( 16 );
};

export const encrypt = ( myDataString, key, iv ) =>
{
  return CryptoJS.AES.encrypt( myDataString, key, { iv: iv } );
};

export const encryptKeyWithPublicKey = ( cryptoKey ) =>
{
  const key = new NodeRSA( PUBLIC_KEY, { encryptionScheme: 'pkcs1' } );
  const encryptedBytes = key.encrypt( cryptoKey, 'base64' );
  return encryptedBytes;
};
