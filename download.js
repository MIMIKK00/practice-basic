const https = require("https");
const fs = require("fs");

const url = "https://cdn.pixabay.com/photo/2022/07/30/14/07/butterfly-7353884_960_720.jpg";


//파일 가져오려고 get 메소드 사용
https.get(url, function (res) {
    const fileStream = fs.createWriteStream("color.jpeg");

    //fileStream에 담은거 pipe로   
    res.pipe(fileStream);
    fileStream.on("finish", function () {
        fileStream.close();
        //엔드포인트 지정?
        console.log("downloaded!");
    });

});

// 파일을 읽기 위해서는 createReadSteam(path, [options])

// 파일을 쓰기 위해서는 createWriteStream(path, [options])

// 입력과 출력을 한번에 이어주기 위해서는 inputStream.pipe(outputStream)

// 새 폴더(디렉토리)를 만들기 위해서는 mkdir(path[, options], callback), mkdirSync(path[, options])

// 디렉토리 삭제하기 위해서는 rmdir(path, callback), rmdirSync(path)

// 파일 존재 확인을 위해서는 exists(path, callback)

// 파일명 변경하기 위해서는 rename(oldPath, newPath, callback), renameSync(oldPath, newPath)

// 파일을 삭제하기 위해서는 unlink(path, callback), unlinkSync(path)