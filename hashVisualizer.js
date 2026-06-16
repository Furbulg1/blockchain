import SHA256 from 'crypto-js/sha256';

export function visualizeHash(input) {
    const hash = SHA256(input).toString();

    return hash.split('').map((char, i) => ({
        value: char,
        position: i
    }));
}
