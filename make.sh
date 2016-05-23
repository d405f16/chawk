echo "Downloading compiler..."
if [ ! -d "tmp/chawk" ]; then
git clone https://github.com/d405f16/chawk-compiler.git tmp/chawk >/dev/null
fi
cd tmp/chawk
git pull >/dev/null
cd ../..

echo "Building compiler..."
cd tmp/chawk
gradle fatJar >/dev/null
cd ../..

cd src
npm install >/dev/null
cd ..
