import * as crypto from 'crypto';

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

// Encrypt function
export const encrypt = (text: string): { iv: string; encryptedData: string } => {
  let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}

// Decrypt function
export const decrypt=(encrypted: { iv: string; encryptedData: string }): string => {
    try {
        const ivBuffer = Buffer.from(encrypted.iv, 'hex');
        const encryptedTextBuffer = Buffer.from(encrypted.encryptedData, 'hex');
        const decipher = crypto.createDecipheriv(algorithm, key, ivBuffer);
        let decrypted = Buffer.concat([decipher.update(encryptedTextBuffer), decipher.final()]);
        return decrypted.toString('utf8');
      } catch (err) {
        console.error("Decryption error:", err);
        throw err;
      }

}
