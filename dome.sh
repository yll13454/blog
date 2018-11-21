
if [ -d $1 ]; then
    echo '错误：文件已经存在'
    exit 1
else
    mkdir $1
    cd ./$1
    mkdir css js
    touch index.html css/style.css js/main.js
    ###################################
    #echo '<!DOCTYPE>' > index.html
    #echo '<title>Hello</title>' >> index.html
    #echo '<h1>Hi</h1>' >> index.html
    ###################################
    #注意后面一个EOF要顶格写
(
cat <<EOF
<!DOCTYPE>
<title>Hello</title>
<h1>Hi</h1>
EOF
)> index.html
(
cat <<EOF
var string = "Hello World"
alert(string)
EOF
)> js/main.js
echo 'h1{color: red;}' > css/style.css
    echo '创建成功'
    exit 0
fi