const Theme = require('talk/models/theme');

exports.create = async (ctx) => {
    // request body 에서 값들을 추출합니다
    const {
        question
    } = ctx.request.body;
    // Book 인스턴스를 생성합니다
    const theme = new Theme({
        question
    });

    // 만들어진 Book 인스턴스를, 이렇게 수정 할 수도 있습니다.
    // theme.sentence = sentence;

    //.save() 함수를 실행하면 이 때 데이터베이스에 실제로 데이터를 작성합니다.
    // Promise 를 반환합니다.
    try {
        await theme.save();
    } catch(e) {
        // HTTP 상태 500 와 Internal Error 라는 메시지를 반환하고,
        // 에러를 기록합니다.
        return ctx.throw(500, e);
    }

    // 저장한 결과를 반환합니다.
    ctx.body = theme;
};