import Image from 'next/image';
import banner from '@/public/icons/oms/bannerImg.json';
import bannerVi from '@/public/icons/oms/bannerImgVi.json';
import { useTranslation } from 'next-i18next';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';

export default function BannerOMS(props: any) {
  const { t } = useTranslation('common');
  const router = useRouter();
  return (
    <div key={`${props.id}_${props.__component}`}>
      {props && (
        <div className="banner">
          <div className="container user-select-none">
            <div className="row">
              <div
                className="col-lg-6"
                dangerouslySetInnerHTML={{ __html: props?.content }}
              />
              <div className="col-lg-6">
                <div>
                  <Player
                    src={router?.locale === 'vi' ? bannerVi : banner}
                    loop
                    autoplay
                    style={{ width: '100%', height: 'auto' }}
                  >
                    <Controls />{' '}
                  </Player>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
