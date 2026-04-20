# 상태 표시줄(Status Line) 설정

## Context
Claude Code 상태 표시줄에 현재 디렉터리, 모델명, 컨텍스트 사용량을 표시하기 위한 설정입니다.

## 구현 계획

### 1. 스크립트 생성
`/c/Users/shirt/.claude/statusline-command.sh` 파일 생성:
- stdin으로 JSON 입력 수신
- `jq`로 `cwd`, `model.display_name`, `context_window.remaining_percentage` 파싱
- ANSI 색상 코드로 포맷: `<디렉터리> | <모델명> | ctx: XX% left`

### 2. settings.json 업데이트
`/c/Users/shirt/.claude/settings.json`에 `statusLine` 키 추가:
```json
{
  "statusLine": {
    "type": "command",
    "command": "bash /c/Users/shirt/.claude/statusline-command.sh"
  }
}
```

## 검증
- Claude Code 재시작 후 하단 상태 표시줄에 디렉터리, 모델명, 컨텍스트 % 표시 확인
