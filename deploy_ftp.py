import ftplib
import os

FTP_HOST = 'sv14775.xserver.jp'
FTP_USER = 'xs585681'
FTP_PASSWORD = 'bjf2ogzm'
REMOTE_BASE = '/reiown.net/public_html/history-visualizer'
LOCAL_DIR = r'G:\dev\プロジェクト\現行プロジェクト\human-history-simulator\dist'

ftp = ftplib.FTP(FTP_HOST)
ftp.login(FTP_USER, FTP_PASSWORD)
ftp.encoding = 'utf-8'
print('FTP connected')

def ensure_dir(path):
    try:
        ftp.mkd(path)
        print(f'Created: {path}')
    except:
        pass

ensure_dir(REMOTE_BASE)
ensure_dir(REMOTE_BASE + '/assets')

for root, dirs, files in os.walk(LOCAL_DIR):
    for f in files:
        local_path = os.path.join(root, f)
        rel = os.path.relpath(local_path, LOCAL_DIR).replace(os.sep, '/')
        remote_path = REMOTE_BASE + '/' + rel
        with open(local_path, 'rb') as fh:
            ftp.storbinary(f'STOR {remote_path}', fh)
        print(f'Uploaded: {rel}')

ftp.quit()
print('Done!')
